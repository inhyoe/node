const fs = require('fs').promises;
const { createContext } = require('fs');

fs.readFile('./readme.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());

})
fs.readFile('./readme.txt') 
.then((data) =>{
    console.log(data);
    console.log(data.toString());
})



// const { fstat } = require("fs")


    // fs.readFile(
    //     // buffer : 8bits로 나타내는 메모리상의 데터이 , 사람이 인지할 수 없음

    //     './readme.txt', //읽으려는 파일명
    //     (err,data) => {
    //         if(err){
    //             throw err;
    //         }
    //         console.log(data);
    //         console.log(data.toString());;
    //     }
    // )
// fs.readFile('./readme.txt')
// .then((resolve,reject) => {
    
//     console.log('1번' , resolve.toString());
//     return resolve
// }).then((resolve,reject) => {
//     console.log('2번' , resolve.toString());
//     return resolve
// }).then((resolve,reject) => {
//     console.log('3번' , resolve);
// })

// 
// (async () =>{
//     try{
//         const data = await fs.readFile('./readme.txt')
//         console.log(data);
//         console.log(data.toString());
//     }
//     catch(err){
//         console.error(err);
//     }
// })();