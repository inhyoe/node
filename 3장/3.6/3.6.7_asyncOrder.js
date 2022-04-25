const fs = require('fs').promises;

console.log('시작');
fs.readFile('./writeFile.txt')
.then((resolve)=>{
  console.log('1번',resolve.toString());
  return resolve
}).then((resolve)=>{
  console.log('2번',resolve.toString());
  return resolve
}).then((resolve)=>{
  console.log('3번',resolve.toString());
  return resolve
}).catch(
  (err)=>{
    console.error(err);
  }
)

// fs.readFile('./writeFile.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번', data.toString());
//   fs.readFile('./writeFile.txt', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번', data.toString());
//     fs.readFile('./writeFile.txt', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번', data.toString());
//       console.log('끝');
//     });
//   });
// });