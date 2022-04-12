const url = require('url');
const querystring = require('querystring');
// searchPharams보다 간단하지만 (그만큼 불편)
const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

const query = querystring.parse(parsedUrl.query);

console.log(parsedUrl);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));