// const crypto = require('crypto');
// 메소드 체이닝
const crypto = require('crypto');
// 해시함수생성           // 해시종류 업데이트 // 암호화시킬 문장
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
// 해시 알고리즘
// m5     - 128bit - 취약점이 발견됨.
// sha1   - 160bit - 취약점 발견
// sha256 - 256bit - 32bytes - 간당간당
// sha512 - 512bit - 64bytes - 사용중 , 간당
// sha3   - 512bit - : 가장 안전

// update(암호화 하려는 평문)

// digest(인코딩 코드) : base64 encoding -> 가장 짧음.
// 인코딩 코드 base64, hex, latin1 등..
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));


crypto.randomBytes(64// 64 바이트의길이 512
    , (err, buf) => { // buf에 생성된 데이터 목록
    
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', 
    salt, // 암호화할 평문
    100000, // 소금
    64,     // 음식의 소금처럼 평문에추가
    'sha512', // 암호 해시함수알고리즘
    (err, key) => { // key-암호문
        console.log('password:', key.toString('base64'));
    });
});

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);

const crypto = require('crypto');