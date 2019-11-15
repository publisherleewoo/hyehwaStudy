const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary'); // production 환경에서 파일 클라우드 저장소 업로드 라이브러리
const { verifyToken } = require('./middlewares'); // 인증 방식 도입 후 토큰 체크 함수 만들어 지면 사용!

const fs = require('fs');
fs.readdir('./public/images', (err) => {
    if(err) {
        fs.mkdir('./public/images', {recursive: true}, err => {console.log(err);})
    }
})

/*
// 로컬 스토리지 업로드 (production 환경시 Heroku 의 제한된 로컬 스토리지에 업로드)
// 파일 이름은 오리진 이름과 현 날짜/시간을 조합하여 unique 한 이름을 만들었습니다. 중복 방지
// 파일 크기 제한 : 현재 3MB * 5 개까지 동시 업로드
*/
const singlelocal = multer({
    storage : multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './public/images/');
        },
        filename(req,file,cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits : {fileSize : 3 * 1024 * 1024},
});

/* 
    싱글 메모리 스토리지 (옵션 존재하지 않음)
    production 환경에서 이미지 업로드시, multer 는 로컬에 저장하지 않고 
    이미지를 파싱만 하고 바로 클라우드에 전송하는 것 만을 목표로 해야 합니다.
    하지만 storage 가 기본 옵션인 multer 에서는 휘발성 메모리 스토리지인 
    memorystorage 에 저장하는 것으로 의미 없는 업로드를 방지합니다. (buffer 로 저장)
*/
const singlememory = multer({
    storage : multer.memoryStorage(),
    limits : {fileSize : 3 * 1024 * 1024},
});

// image single process
// Multer Error handling
router.post('/', verifyToken, singlelocal.single('img'), (err, req, res, next) => {
    if(err) { 
        console.log("UPLOAD Failed : " + req.file);
        res.status(409).send("UPLOAD Failed : " + err); 
    }
})

// Success upload
router.post('/', verifyToken, singlelocal.single('img'), (req, res) => {
    console.log("UPLOAD file : " + req.file);
    res.send({ url: req.file.filename })
})

/* 
    cloudinary 설명
    - public_id : 새로운 이름 부여
    - url : 클라우드 저장소에서 직접 끌어올수 있는 경로 (현재 http, 보안 경로는 result.url 대신 result.secure_url 을 넣으면 됨.)
    - stream : 이미지를 직접 파일을 옮기는 것이 아닌 버퍼를 이용하여 클라우드에만 본체를 만듦
    multer 에서 memoryStorage 활용
*/
// production mode - cloudinary (heroku addon) uploader 
router.post('/ci', verifyToken, singlememory.single('img'), async (req,res) => 
{
    const file = req.file;
    const newDate = Date.now();
    const ext = path.extname(file.originalname);
    const newName = path.basename(file.originalname, ext) + newDate;
    const stream = cloudinary.uploader.upload_stream(function(result) {
        console.log("UPLOAD file : " + newName);
        res.send({url : result.url});
    }, {public_id: newName});
    stream.write(file.buffer);
    stream.end();
})

// local storage 에서 이미지 삭제
router.delete('/', verifyToken, (req,res) => {
    fs.unlink('./public/images/' + req.query.name, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            res.send ({
                status: "200",
                responseType: "string",
                response: { result : "success removed image" }
            });
        }
    });
})

// cloudinary Cloud Storage 에서 이미지 삭제
router.delete('/ci', verifyToken, (req,res) => {
    const destroyName = req.query.destroyId;
    cloudinary.uploader.destroy(destroyName, () => {console.log(`Destroy file : ${destroyName}`)});
});

module.exports = router;