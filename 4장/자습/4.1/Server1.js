/* const http = require("http");

const server = http.createServer((req,res) => {
    res.write('<h1> Hello node </h1>')
    res.end('<p>Hello server</p>')
});

server.listen(8080);

server.on(8080, ()=> {
    console.log('8000번 포트에서 서버 대기중입니다.');
});
server.on('error', (error) =>{
    console.error(error);
}) */


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>'); // 첫번째 인자 : 클라이언트로 보낼 데이터
  res.end('<p>Hello Server!</p>');  // 응답을 종료하는 메서드
});
server.listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', (error) => {
  console.error(error);
});
// 위 방법은 매우 비효율적,
// html을 readfile하여 불러오는것이 효율적,