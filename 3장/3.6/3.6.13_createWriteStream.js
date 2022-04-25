const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});
/* fs.writeFile('./writeFile1.txt','저를 읽어보세요')
.then(()=>{
    return fs.readFile('./writeFile.txt')
})
.then((data) =>{
    console.log(data.toString());
}).catch((err) =>{
    console.error(err);
}) // 파일을 만드는 메서드 */

// fs.writeFile('./writeFile2.txt','저를 읽어줘 보세요')
// .then(()=>{
//     return fs.readFile('./writeFile.txt')
// })
// .then((data) =>{
//     console.log(data.toString());
// }).catch((err) =>{
//     console.error(err);
// })

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();