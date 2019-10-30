/* 
    Passport 

    Passport는 Node의 인증 미들웨어입니다 . 인증 요청이라는 단일 목적을 제공하도록 설계되었습니다. 
    모듈을 작성할 때 캡슐화는 미덕이므로 Passport는 다른 모든 기능을 응용 프로그램에 위임합니다. 
    이러한 분리 된 문제는 코드를 깨끗하고 유지 관리 할 수있게 해주 며 Passport를 응용 프로그램에 매우 쉽게 통합 할 수 있도록합니다.
    최신 웹 응용 프로그램에서 인증은 다양한 형식을 취할 수 있습니다. 일반적으로 사용자는 사용자 이름과 비밀번호를 제공하여 로그인합니다. 
    소셜 네트워킹의 등장 으로 Facebook 또는 Twitter 와 같은 OAuth 공급자 를 사용한 싱글 사인온 (SSO) 이 널리 사용되는 인증 방법이되었습니다.
    API를 노출하는 서비스는 종종 액세스를 보호하기 위해 토큰 기반 자격 증명이 필요합니다.
    Passport는 각 응용 프로그램마다 고유 한 인증 요구 사항이 있음을 인식합니다. 
    전략(Strategy) 이라고하는 인증 메커니즘 은 개별 모듈로 패키지됩니다. 
    응용 프로그램은 불필요한 종속성을 만들지 않고 사용할 전략을 선택할 수 있습니다.
    (출처 - passport 공식 홈페이지)

    jwt (json web token)

    공식 홈페이지 : https://jwt.io/

    구성
    
    hhhhhh.pppppp.ssssss ( base 64 )

    Header - 암호화 알고리즘, 타입
    Payload - 정보
    Signature - 서명

    요청에 실어보내는 방법 : 
    Barder 스키마를 사용하여 '헤더' 에 실어 보냄
    Authorization : Barder <token>

    axios({
        method : 'post,
        url : '/api/auth',
        headers : {
            'Authorization' : window.sessionStorage.getItem('token'),
        }
    })

    req.session.header.Authorization

    특 장점 !!!
    토큰이 Authorization 헤더 로 전송되면 쿠키를 사용하지 않으므로 
    CORS (Cross-Origin Resource Sharing)는 문제가되지 않습니다. (아주 짜증나는 문제)

    단점 - 길어서 용량을 차지함. (local or session storage)

    보안 - 시크릿 코드(secret) 을 알지 못하면 복호화 할수 없으므로, 일반 알고리즘 사용만으로는 해독이 어려움
*/

const session = require('express-session');
const passport = require('passport');

const dotenv = require('dotenv');

const sessionoption = {
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
    name: '_aquaclub',
}


app.use(cookieparser(process.env.COOKIE_SECRET));
app.use(session(sessionoption));

// passport init
app.use(passport.initialize());
app.use(passport.session());

// passport module setting
const passport_module = require('./routers/passport/index');
passport_module(passport);

exports.islogged = (req, res, next) => {
    if(res.isAuthenticated()) {
        return next();
    }
    else {
        return res.status(419).send();
    }
}

exports.isNotlogged = (req, res, next) => {
    if(res.isUnauthenticated()) {
        return next();
    }
    else {
        return res.status(419).send();
    }
}

// session cookie login check
exports.verifyToken = (req, res, next) => {
    try 
    {    
        let session = null;

        if(process.env.NODE_ENV === "production") {
            const sessionId = req.signedCookies['_aquaclub'];
            console.log(sessionId);
            if(req.sessionStore) {
                req.sessionStore.get(sessionId, (err, sess) => {
                    if(err) {
                        console.log("haven't session id : " + err);
                        res.status(404).send("haven't session id : " + err);
                    }
                    else if(sess) {
                        req.sessionStore.createSession(req, sess);
                        req.sessionStore.get(sessionId, (err, sess) => {
                            session = sess;
                        });
                    }
                });
            }
        }
        else {
            session = req.session;
        }

        const id = session.userdata;
        if(id !== undefined && id !== null) {
            req.decoded = { id : id };
            return next();
        }
        else {
            if(session.jwttoken === undefined || session.jwttoken === null)
                return res.status(419).send("Not exist token : error 419");

            // first value is innertext
            let firstparse = session.jwttoken.split('"');
            let token = "";
            firstparse.forEach(elem => {
                token = (token.length < elem.length) ? elem : token;
            });

            const secret = (process.env.NODE_ENV === "production") ? process.env.JWT_SECRET : "jwt_lo_secret";
            req.decoded = jwt.verify(token, secret);
            return next();

        }
    }
    catch (err) {
        if(error.name === 'TokenExpiredError') { // 유효시간 초과
            console.log("expired token : error 419");
            return res.status(419).send("expired token : error 419");
        }
        else {
            console.log("invalid token : error 401");
            return res.status(401).send("invalid token : error 401");
        }
    }
}