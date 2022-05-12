const express = require('express');
const path = require('path');
const morgan = require('morgan') // 서버에 로그를 남기기 위한 미들웨어
const nunjucks = require('nunjucks') // 서버에 로그를 남기기 위한 미들웨어
const app = express(); 

const {sequelize} = require('./models'); // models안의 index.js파일에서 sequelize를 임포트했으니 소문자를 처리하겠다


app.set('port', process.env.PORT || 3001);
app.set('view engine','html') // njk로 설정하면, views폴더에 파일명의 확장자를 ,njk로 바꿔야함.
nunjucks.configure(
    'views',  // 뷰 파일의 폴더 지정 파일명은 같아야함
    {express : app, watch : true}
);

sequelize.sync({force:false}) // promise기반의 ORM라이브러리 DB에 연결하는 것.
.then(
    () => {
        console.log("DB서버에 접속 성공");
    }
).catch(
    (error)=>{
        console.error("DB서버에 접속 실패",error);
    }
)// 미들웨어 설정
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');// 에러페이지 생성(views폴더에 error파일을 만든다.
});


app.listen(app.get('port'),
    () => {
        console.log(app.get('port'),'포트에서 실행하여 대기중.');
    }
)