const { odd, even } = require('./var.mjs'); // 구조분해할당.
// const odd = require(./var).odd ... 해야하나 구조분해할당함.(변수와 속성명이 같음)

// require(사용모듈 경로) -- 확장자는 생략 가능 (var.js 가능)


function checkOddOrEven(num) {
    if (num % 2) { // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;