const express = require('express'); // express 모듈 임포트
const path = require('path');      
 
const app = express(); // 웹서버 객체를 생성한다.
console.log(app);
app.set('port', process.env.PORT || 3000);
// default 로는 3000이고, process.ent.PORT 가 '' 아니면 process.ent.PORT 값으로 설정
// 미들웨어 구현

app.get('/',
(req,res,next)=>{
  console.log("GET /요청시에만 실행되는 미들웨어");
next()
},
(req,res) =>{
  throw new Error('에러발생시 호출')
}
  )
const upload =  multer(
  {//  옵션객체
    stoarge:
    multer.diskStorage({ // disk에 저장
      destination(req,file,done){ // HDD의 어느 위치로 저장할지
        done(null,'uploads'); // hdd의 해당 위치값(폴더명)
      },
      filename(req,file,done){
        const ext = path.extname(file.originalname);
      }
    })
    , //저장공간에 대한 옵션
    limits : {filesize : 5* 1024*1024}//업로드 용량제한(byte단위)
                                      //5mb까지
  }
);

  app.use((req,res,next) => {
    console.log('모든 요청에 대해 처리하는 미들웨어 작성');
    // next();
  })


app.get('/', (req, res) => {
  // res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/index.html'));
  // html이 없어도 send값으로 가능
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

