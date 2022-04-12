const fs = require('fs');

console.log('시작');

fs.readFile('./readme.txt')

let data = fs.readFileSync('./readme.txt')
console.log(data);
console.log('1번',data.toString());
data = fs.readFileSync('./readme.txt')
console.log('2번',data.toString());
data = fs.readFileSync('./readme.txt')
console.log('3번',data.toString());