const fs = require('fs')

console.log('시작');


// .then((data)=>{
//     console.log('1번',data.toString());
    
// }).then((data)=>{
//     console.log('2번',data);
// }).then((data)=>{
//     console.log('3번',data);
// })
fs.readFile('./readme.txt',(err, data) =>{
    if(err){
        throw err
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme.txt',(err, data) =>{
    if(err){
        throw err
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme.txt',(err, data) =>{
    if(err){
        throw err
    }
    console.log('3번', data.toString());
});
console.log('끝'); // 순서가 매번 다르게 실행된다.
// 비동기로 동작해서그럼,