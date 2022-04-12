const http = require('http')

http.createServer(
    (req,res) =>{
        
        console.log(req.url, 
            req.headers.cookie // 최초에 서버에 접속할때는 쿠키가 브라우저에 없기 때문에 undefined 출력이 되고 추후에는 출력.
            );
        res.writeHead(200,{'set-Cookie':`mycookie = test; testookie = testvalue; ttt=${encodeURIComponent('김영진')}`})
        res.end('한글로 만들어 봅시다.')
    }

).listen(8083,
    ()=>{
        console.log('8083포트가 작동중');
    })