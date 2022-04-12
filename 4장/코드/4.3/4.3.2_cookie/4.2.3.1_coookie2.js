const testCookie = `name=${encodeURIComponent('김영진')}; mytest = 1234&jsos; japanit = kanbare`;
// const query = require('queryString');
// console.log();
// console.log(object);
const parseCookies = (cookie = '' ) =>{
    console.log(cookie);
    return cookie // 메서드 체이닝 방법으로 call.
      .split(';') // 스플릿 된 값 들어감(***질문 JSON값? 객체?)  ==> 배열!
      /*    [
       'name=%EA%B9%80%EC%98%81%EC%A7%84',
       ' mytest = 1234&jsos',
       ' japanit = kanbare'
      ] */
      .map(v => v.split('=')) // = 을 기준으로 split하여 문자열을 배열로 만들어줌 (2차원 배열) return값(배열)
      /* [
        [ 'name', '%EA%B9%80%EC%98%81%EC%A7%84' ],
        [ ' mytest ', ' 1234&jsos' ],
        [ ' japanit ', ' kanbare' ]
      ] */
      .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v); // decodeURIComponent -> 문자열 처리이므로 1234 도 문자열 처리됨.
        return acc;
      }, {} // 초기값
      );
    }


console.log(parseCookies(testCookie));