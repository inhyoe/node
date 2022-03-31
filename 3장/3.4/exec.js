// const exec = require('child_process').exec;
// // const exec = require('child_process'); // 구조분해할당

// var process = exec('ls');
// // dos명령어, linus명령어 = ls

// process.stdout.on('data', function (data) {
//     //stdout 표준 출력
//     console.log(data.toString());
// }); // 실행 결과

// process.stderr.on('data', function (data) {
//     //표준입력
//     console.error(data.toString());
// }); // 실행 에러

// const spawn = require('child_process').spawn;

// var process = spawn('python', ['test.py'],{shell : true});

// process.stdout.on('data', function (data) {
//     console.log(data.toString());
// }); // 실행 결과

// process.stderr.on('data', function (data) {
//     console.error(data.toString());
// }); // 실행 에러

