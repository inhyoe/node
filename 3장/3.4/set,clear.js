// const timeout = setTimeout(() => {
//     console.log('1.5초 후 실행');
// }, 1500);

// const interval = setInterval(() => {
//     let a = 1;
//     console.log(`${a}초마다 실행`);
//     a = a+1
// }, 1000);

// const timeout2 = setTimeout(() => {
//     console.log('실행되지 않습니다');
// }, 3000);

// setTimeout(() => {
//     clearTimeout(timeout2);
//     clearInterval(interval);
// }, 2500);

// const immediate = setImmediate(() => {
//     console.log('즉시 실행');
// });

// const immediate2 = setImmediate(() => {
//     console.log('실행되지 않습니다');
// });
// clearImmediate(immediate)
// clearImmediate(immediate2);

// console.log(__filename); // fulldirectory (절대경로)
// console.log(__dirname);  // filedirectory (상대경로)

// const odd = '홀수';
// const even = '짝수'
// exports = { 
//     odd,even // 원래는 module.exports를 참조관계가 깨짐
// }

// // ======================

// console.log(this);
// console.log(this === module.exports);
// console.log(this === exports);

// function whatIsThis1(){ // 일반 햠수 정의
//     //this : global 객체가 된다
//     console.log('function', this === exports, this === module.exports);
// }

// // whatIsThis1()
// (whatIsThis = () =>{
//     // 정의 후 호출
//     console.log('arrow function' , this === exports, this === module.exports);
// })();


// console.log(__filename);
// console.log(__dirname);



console.log("기모리");

module.exports = '저를 찾아보세요';

require('./var');

console.log("캐시 입니다");
console.log(require.cache);
console.log('require.main');
console.log(require.main === module);
console.log(require.main.filename);