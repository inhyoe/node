const http = require('http');

const parseCookies = (cookie = '') =>
    cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v); // trim공백제거
        return acc;
    
    },{});
    

http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie); // req.header은 요청의 헤더. req.header.cookie는 req객체에 담겨있는 쿠키를 분석.
    console.log(req.url, cookies);
    res.writeHead(200, {'Set-Cookie' : 'mycookie = test'}); // 200은 성공이라는 의미.
    res.end('Hello Cookie');
}).listen(8082, () => {
    console.log('8082번 포트에서 서버 대기중입니다!');
})