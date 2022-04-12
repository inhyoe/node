const fs = require('fs').promises

fs.writeFile('./writeFile.txt','저를 읽어보세요')
.then(()=>{
    return fs.readFile('./writeFile.txt')
})
.then((data) =>{
    console.log(data.toString());
}).catch((err) =>{
    console.error(err);
})