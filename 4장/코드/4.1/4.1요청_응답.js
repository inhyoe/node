const http = require('http');

// const server =
http.createServer(
    (req,res) => { // req : request 객체 res : response객체
        // if(req.url === '/users')
        res.writeHead(200,{'Content-type':'text/html; charset = utf8 '}); // 헤더 
        res.write('<h1>Hi Japan Class</h1>'); // 클라이언트로 전송, 응답 바디
        res.write('<h2>2WDJ</h2>'); // 클라이언트로 전송, 응답 바디
        res.write('<span style = "background-color : orange; color=black">Hi Japan Class</span>')
        res.end('<div>Success!</div>'); // (http응답을)바디를 클라이언트로 전송 
        // res.end('<p> Hello Server! , </p>');
    }
).listen( // 서버 실행 대기
    '8080' , // 포트번호
    ()=>{// 콜백함수
        // 서버 실행이 성공되면 호출
        console.log('8080at the port launched and require staying');
        console.log('http://localhost:8080/ 으로 요청 시도하시기 바람.');
    } 
)

// server.listen(8080); // 서버를 받는역할