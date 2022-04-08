const path = require('path');

const string = __filename; // 현재 파일의경로 포함 파일명

console.log('path.sep:', path.sep); // 경로 구분자
console.log('path.delimiter:', path.delimiter); // 환경변수의 구분자
// window : ; posix - : //
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
// __dirname ==
console.log('path.extname():', path.extname(string));
// ext --> extension (확장자)
console.log('path.basename():', path.basename(string));
// 파일의 이름(경로 포함하지 않은, 확장자 포함)
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
// 파일의 이름만
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
// parse(문자열) : 반환값 => 객체
console.log('path.format():', path.format({
    dir: 'C:\\users\\zerocho',
    name: 'path',
    ext: '.js',
}));
// format(객체): 반환값 => 문자열 parse와 반대됨

console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));
// nomalize() : 오류가 있는 경로를 정상적으로 변경해서 반환
console.log('------------------------------');
console.log('path.isAbsolute(/:\\):', path.isAbsolute('/\\'));
// 절대경로라면 true로 반환됨
// window - C: 등으로 시작
// POSIX - /으로 시작
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
// 상대경로라면 fasle
// windows , POSIX : . | ..으로 시작 
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
// relative(기존경로, 비교경로); 기준경로로 이동하기 위한 상대경로를 반환.
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
// join, resolve : 거의 비슷
// join : 파라미터를 하나의 경로로 합쳐서 반환
// 정보가 있다면 상대 경로로 처리
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));
// join : 파라미터를 하나의 경로로 합쳐서 반환
// 정보가 있다면 절대 경로로 처리