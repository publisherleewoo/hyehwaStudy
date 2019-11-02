exports.verifyToken=(req,res,next)=>{
    try{
        req.decoded=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        return next();
    }catch(error){
        if(error.name==='TokenExpiredError'){
            return res.status(419).json({code:419,message:' 토큰만료'});
        }
        return res.status(401).json({
            code:401,
            message:'비 유효'
        });
    }
}


//   /routes/v1.js
const jwt=require('jsonwebtoken');
const {Domain}=require('../models');
router.post('/token',async (req,res)=>{
    const {clientSecret}=req.body;
    try{
        const domain=await domain.findOne({
            where:{clientSecret},
            include:{
                model:User,
                attribute:['nick','id']
            }
        });
        if(!domain){
            return res.status(401).json({code:401,message:'등록되지 않은 도메인'})
        }
        const token=jwt.sign({
            id:domain.user.id,
            nick:domain.user.nick
        }, process.env.JWT_SECRET, {expiresIn:'1m',issuer:'SM'}); //내용,비밀키,옵션 순서로 넘기면 사인됨. 유효기간은 msec단위로 숫자로 쓸 수 있음.
        return res.json({
            code:200,
            message:'토큰 발급됨',
            token
        });
    }catch(e){
        console.error(error);
        return res.status(500).json({
            code:500,
            message:'서버에러'
        });
    }
});

router.get('/test',verifyToken,(req,res)=>{
    res.json(...);//검증 미들웨어 거친 후 맞으면 필요한 응답으로 반환해줌.
});

module.exports=router;

//사용량 제한 구현은 express-rate-limit 패키지로 가능. 미들웨어로 router.post('/token',apiLimiter,async (req,res)=>{})
//이런식으로 넣어준다.