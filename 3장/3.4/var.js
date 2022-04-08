// const odd = '홀수';
// const even = '짝수';

// module.exports ={
//     odd,even // 스위칭 문법.
// }
const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch()); // arch()
console.log('os.platform():', os.platform()); // 
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length); // core 갯수

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem()); // 사용 가능 메모리 용량
console.log('os.totalmem():', os.totalmem()); // 전체 메모리