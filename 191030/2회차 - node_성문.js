//라우터 설명 전 간단히 미들웨어에 대한 설명

// app.use('/img',express.static(path.join(__dirname,'public')))

// 이렇게 static file에 접근할 경로를 지정해 줄 수 있다.
// http://localhost:3000/img/abc.png 처럼 파일접근가능.
// 쓸데없는 미들웨어 거치지 않게 상단에 써주는게 좋다.
// static 미들웨어는 요청에 부합하는 정적 파일을 발견하면 해당 파일을 응답으로 전송하고
// 다음 라우터로 넘기지 않음. 못찾았을때만 넘김


// cookieParser와 express-session의 secret code는 동일해야 한다. 세션관리시 클라이언트에 쿠키를 보내는 역할.
// app.use(session({
//   resave:false, //요청이 왔을 때 세션에 수정 사항없어도 세션을 다시 저장할지
//   saveUninitialized:false, //세션에  저장할내역없더라도저장? 방문자추적시 사용
//   secret:'secret code',//필수항목. cookieparser와 동일한 값으로
//   cookie:{
//     httpOnly:true, //클라이언트에서 쿠키확인못하게.http로만접근가능
//     secure:false //https에서만 사용가능하게할지여부
//   },
//   store:new RedisStore({ //메모리에 세션을 저장하면 서버 재시작시 초기화되어 세션이 모두 사라짐. 이걸db에 연결하면유지가능
//     host:process.env.REDIS_HOST,
//     port:...,
//     pass:...,
//     logErrors:true,
//   })
// }))

//routes/index.js

// const express=require('express')
// const router=express.Router();
// router.get('/',function(req,res,next){
//   res.render('index',{title:'Express'})
// });
// module.exports= router;

// router.get('/', middleware1,middleware2,middleware3) 가능. 
// middleware 중간에 next('route')를 쓰면 특수명령어로서 연결된 나머지 미들웨어 skip.
// '/users/:sth' => req.params.sth 로 사용가능. 이거로 쿼리스트링도 받을수있다.
// /users/123?limit=5&skip=10 가 들어오면
// req.params={sth:'123'};  req.query={limit:'5',skip:'10'}으로 받아짐 string으로 받아지는것에 주의. 
// 일반라우터보다 뒤에위치해야함.

// #connect-flash : 일회성 메시지들을 웹브라우저에 뿌릴때 좋음. 
// cookie-parser와 express-session을 사용하므로 이들보다 뒤에 위치해야함.
//  req객체에 req.flash(키,값) 메서드를 추가해 해당 키에 값을 설정하고 req.flash(키)로 값을 불러옴.
//   브라우저 새로고침시 세션메시지는 유지되지만 flash메시지는 보이지 않는 일회용 
//   => 로그인에러나 회원가입 에러같은 일회성 경고메시지를 보내기 좋음.


// res.render('index',{title:'Express'})

// 위를 아래처럼 쓸 수 있다.

// res.locals.title='Express';
// res.render('index');
// 이 방식의 장점은 다른 미들웨어에서도 변수를 접근가능 하다는 것.중복을 막아준다.
// 단,app.locals는 application을 scope로 가진다면 res.locals는 해당request에서만 유효
// This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.
// app.use(function (req, res, next) {
//   res.locals.user = req.user
//   res.locals.authenticated = !req.user.anonymous
//   next()
// })

// ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client 
// ALTER USER '{root}'@'{localhost}' IDENTIFIED WITH mysql_native_password BY '{password}'; flush privileges; 
// caching_sha2_password

// Failed to serialize user into session

// passport.serializeUser((user,done)=>{
//     console.log('passport session save: ',user.id);
//     done(null,user.id);
//  });
//  passport.deserializeUser((id,done)=>{
//         console.log('passport session get id: ',id);
//     done(null,id);
//  });
 
//  실제 passport.use() 부분에서 콜백함수가 return하는 done(null,유저정보객체)에서 유저정보객체를 받아오는 부분이 에러나서 undefined값이 넘어갔을 경우 passport.serializeUser함수에서 user에 undefined가 들어가면서 serialize에 실패하게 된다. (난 이 경우였음)

