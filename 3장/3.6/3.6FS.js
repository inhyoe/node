const fs = require('fs').promises;
const { createContext } = require('fs');

// const { fstat } = require("fs")


//     fs.readFile(
//         // buffer : 8bits로 나타내는 메모리상의 데터이 , 사람이 인지할 수 ㅇ벟ㅅ음

//         './readme.txt', //읽으려는 파일명
//         (err,data) => {
//             if(err){
//                 throw err;
//             }
//             console.log(data);
//             console.log(data.toString());;
//         }
//     )

//async
(async () =>{
    try{
        const data = await fs.readFile('./readme.txt')
        console.log(data);
        console.log(data.toString());
    }
    catch(err){
        console.error(err);
    }
})();