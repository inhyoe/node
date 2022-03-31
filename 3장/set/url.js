
const url = require('url'); 

const { URL } = url; // 구조분해할당
// searchParams에 대한 참고 = formdata
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// url클래스의 객체 생성 - WHATWG방식
console.log('new URL():', myURL);

console.log('url.format():', url.format(myURL)); // old버전이라 -- 쳐짐 
// format(객체) -> 문자열 반환(old style)
console.log('------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// parse(문자열) -> 객체반환(old style)
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));