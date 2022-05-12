/* const express = require('express'); // express모듈 임포트
const path = require('path');

const app = express(); // 웹서버 객체를 생성
app.set('port', process.env.PORT || 3000);
// 디폴트 3000, process.env.PORT가 ''이 아니면 proces.env.PORT 값으로 설정
// 아니면 

app.get('/', (req, res) => {
  //res.send('Hello, Express');
  //req에 대한 res를 함

  res.sendFile(path.join(__dirname, '/index.html'));
  // 절대경로 지정
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
/

app.get('/',(req,res,next)=>{next()},)
//미들웨어 구현
app.use(req, res, next){
  console.log("모든 요청에 대해 처리하는 미들웨어작성,")

},
(req, res,next)=>()

app.use((err, res, next)=>{
  if(err){console.log(err,"발생함");}
  console.log(err, "발생함");
})

(req,res)=>{
  throw
}










 */

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const nunjucks = require('nunjucks');

const indexRouter = require('./routes');
// 어떤 폴더 내의 index.js는 임포트 시 생략가능
//  require('./routes') === require('./routes.index')
const userRouter = require('./routes/user');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine','html'); // njk 파일이라면, 'html' ---> 'njk'변경해야한다

nunjucks.configure( // config = 환경설정
  'views', // view 파일들의 경로 
  {express:app, watch: true,}// watch:true : view 파일의 변경--->view 엔진이 다시 렌더링

);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false, // https처리시에는 true
  },
  name: 'session-cookie',// 생략하면  connect.sid으로 name 설정됨
}));

const fs = require('fs');
try{
  fs.readdirSync('./uploads'); // 동기적으로 동작
}catch(error){
  console.log("uploads폴더 없어서 생성함");
  fs.mkdirSync('uploads');
}

const upload = multer( // upload - multer 객체
  { //  옵션 객체
    storage: // 저장공간에 대한 옵션
      multer.diskStorage({  // disk에 저장 (HDD)
        destination(req,file,done){ // HDD의 어느위치로 저장할지 신문법: funtion keyword없이 적었기 때문
          // req 는 요청 객체, file = 업로드한 파일정보, done() = 업로드 완료되면 호출 
          done(null,'unloads/'); // null - 에러객체 첫번째 인수 - 에러 객체 
          // 두번째 인수 - HDD의 해당 위치값(폴더명)
        },
        filename(req,file,done){ // 저장시 어떻게 파일명 처리할지 구현
          // ex) abc.jpg
          const ext = path.extname(file.originalname);
          done(null, path.basename(file.originalname,ext)+Date.now()+ext);//(ext = 확장자 제거) 1970/0/0 0시기준 기준 현재까지 경과한 밀리초
          // abc+Date.now()+ext, abc16545435454523.jpg
        }
      }),  
    limits: {fileSize: 5 * 1024 * 1024}// 업로드 용량제한 (byte단위), 5MB로 설정
  }
);

//const multer = require('multer');
//const fs = require('fs');

/* try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
} */
/* const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
}); */
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
/* app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
}); */
app.post( // POST 방식으로 /upload 요청 처리 라우터 입니다. // 라우터 미들웨어 처리되는것 설정하면 됨
  '/upload', // url
  upload.fields([{name:'imagefile'},{name:'imagefile1'}]),
  (req,res) => { 
    console.log(req.files, req.body);
    // req.files: 업로드 파일들의 정보
    // req.body: form태그의 다른값
    res.send('업로드 성공');
})

app.use('/', indexRouter);
app.use('/user', userRouter);


/* app.post( // POST 방식으로 /upload 요청 처리 라우터 입니다. // 라우터 미들웨어 처리되는것 설정하면 됨
  '/upload', // url
  upload.array('manyimgfile'),
  (req,res) => { 
    console.log(req.files, req.body);
    // req.files: 업로드 파일들의 정보
    // req.body: form태그의 다른값
    res.send('업로드 성공');
})
 */

/* app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
}); */

app.use((err, req, res, next) => { // 에러 핸들러
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});


app.use((req,res,next)=>{
  res.status(404).send('파일 못찾음');
});

