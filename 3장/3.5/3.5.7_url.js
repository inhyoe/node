const url = require('url');


const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const queryString = require('querystring')
console.log(parsedUrl);
console.log('쿼리부분',parsedUrl.query); // 쿼리부분
const 쿼리부분 = parsedUrl.query
console.log('쿼리부분 객체화',queryString.parse(parsedUrl.query)); // 객체화
const 쿼리부분_객체화 = queryString.parse(쿼리부분)
console.log('쿼리부분객체화를 문자열로 :',queryString.stringify(queryString.parse(parsedUrl.query)));
const 쿼리부분_객체화를_문자열로 = queryString.stringify(쿼리부분_객체화)

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log(myURL);
console.log('객체 -> 문자열 : ' ,myURL.searchParams.toString()); // searchParams객체를 문자열로
const 객체_문자열 = myURL.searchParams.toString();

console.log('문자열 -> 객체 : ',queryString.parse(myURL.searchParams.toString())); // searchParams문자열을 객체로
const 문자열_객체 = queryString.parse(객체_문자열)

console.log('객체 -> 문자열',queryString.stringify(문자열_객체)); // searchParams 객체(13과 매우 다름....)를 문자열로
const 객체_문자열2 = queryString.stringify(문자열_객체);




console.log(쿼리부분 === 객체_문자열);
console.log(쿼리부분);
console.log(객체_문자열);
console.log(쿼리부분_객체화 === 문자열_객체);
console.log(쿼리부분_객체화);
console.log(문자열_객체);
// console.log(쿼리부분_객체화를_문자열로 == 객체_문자열2);



















// var king = () => {
//     console.log(this);
// }
// var me = {
//     name : 'hi',
//     fuck : () => {
//         console.log(this)
//     },
//     sex : function a(){
//         console.log(this.name);
//     },
//     get : king
// }
// me.fuck()
// me.sex()
// // console.log(me.fuck());
// // console.log(me.sex());
// console.log(me.get);

