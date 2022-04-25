const fs = require("fs").promises;

console.log("시작");
// let data = fs.readFileSync('./readme.txt')
// console.log(data);
// console.log('1번',data.toString());
// console.log('2번',data.toString());
// console.log('3번',data.toString());

// fs.readFile('./readme.txt')
// .then((resolve) => {
//     console.log('1번',resolve.toString());
//     return resolve;
// }).then((resolve)=>{
//     console.log('2번',resolve);
// }).then((resolve)=>{
//     console.log('3번',resolve);
// })

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
      console.log("끝");
    });
  });
});

fs.readFile("./readme.txt")
.then((resolve) => {
  console.log(resolve);
  console.log('1',resolve.toString());
  return resolve;
})
.then((resolve) => {
    console.log(resolve);
    console.log('2',resolve.toString());
    return resolve;
})
.then((resolve) => {
    console.log(resolve);
    console.log('3',resolve.toString());
    return resolve;
});