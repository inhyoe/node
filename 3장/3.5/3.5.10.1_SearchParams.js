const url = require('url');
const {URL} = url;
const myURL = new URL('https://www.youtube.com/watch?v=coViXH5MOOE')
const myURL1 = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const myURL2 = new URL('https://gall.dcinside.com/board/view/?id=dcbest&no=49647')
console.log(url);
console.log('myURL : ', myURL );
console.log('myURL1 : ', myURL1 );
console.log('myURL2 : ', myURL2);
console.log('toString()',myURL2.searchParams.toString());
// whatWG방식

console.log('--------------------------------------------------');
const parsedUrl = url.parse('https://gall.dcinside.com/board/view/?id=dcbest&no=49647')
console.log('url.parse : ',parsedUrl);
console.log('url.format : ',url.format(parsedUrl));