const { URL } = require('url');
//whatWG => 쿼리스트링 부분 처리를 도와주는 깨체.
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const queryString = require('querystring')
// 키도 두개 값도 두개인 category값.
// 페이지는 3번 최대페이지 10 카테고리는 nodejs와 javascript 
// 한마디로 쿼리스트링(Search부분 처리를 도와주는 객체)
console.log(myURL);
console.log('searchParams:', myURL.searchParams);
console.log(myURL.toString(myURL.searchParams));
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));

console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams);
// console.log(myURL.searchParams.values());
myURL.searchParams.append('sex','power'); 
console.log(myURL.toString(myURL.searchParams));
// // myURL.searchParams.delete('sex')
// // myURL.searchParams.delete('filter')
// console.log('keys:',myURL.searchParams.keys());
// myURL.searchParams.set('filter', 'es6');
// console.log(myURL.searchParams.getAll('filter'));

// // myURL.searchParams()

// // myURL.searchParams.delete('filter');
// console.log(myURL.searchParams.getAll('filter'));

// console.log('searchParams.toString():', myURL.searchParams.toString());
// // myURL.search = myURL.searchParams.toString();