const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!");
dontUseMe(1, 2);
// 콜백헬이 발생하므로 13줄처럼 프로미스화하여 콜백헬을 해소함.
// const dontUseMe = (x,y) =>{
//     console.log(x+y);
// }
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
