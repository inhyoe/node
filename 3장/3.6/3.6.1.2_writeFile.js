const fs = require('fs').promises

fs.readFile('WriteFile1.txt')
.then((data)=>{
    console.log('1번',data.toString());
    return data
})
.then((data)=>{
    console.log('2번',data.toString());
    return data
})
.then((data)=>{
    console.log('3번',data.toString());
})
console.log('끝');


// fs.readFile('./readme.txt',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log('1번',data.toString());
// })
// fs.readFile('./readme.txt',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log('2번',data.toString());
// })
// fs.readFile('./readme.txt',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log('3번',data.toString());
// })
// console.log('끝');











// fs.writeFile('./writeFile.txt','저를 읽어줘 보라니까?')
// .then((resolve)=>{
//     return fs.readFile('./writeFile.txt') // 먼저 콜백해야함
//                                         // readFile함수와 큰 차이임.
// })
// .then((data) =>{
//     console.log(data.toString());
// }).catch((err) =>{
//     console.error(err);
// })

// writefile은 파일을 수정하는 역할도 한다.