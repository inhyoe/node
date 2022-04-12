const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (
  cookie = '' // default값 설정.
  ) =>
  cookie // 메서드 체이닝 방법으로 call.
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { name : 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url); // oldstyle query정보를 구조분해 할당하여 가져옴
    const { name } = qs.parse(query); // html 의 name.
    const expires = new Date(); // 날자 객체.
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 1); // 객체 생성
    res.writeHead(302, { // 5분뒤에 쿠키정보를 삭제함. -> 302: 임시이동 , 리다이렉션
      Location: '/', // 이동 위치를 지정합니다.
      //하나만 사용 가능
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        /* HttpOnly : 브라우저의 개발자도구(콘솔)에서 쿠키에 접근할 수 없게 만드는 것. */
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./4.2.3_cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
}) // 서버 객체 생성
  .listen(8084, () => {
    // 성공되면 표시되는 내용
    console.log('8084번 포트에서 서버 대기 중입니다!');
  }); // 실행!