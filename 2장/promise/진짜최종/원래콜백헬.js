const printInLater = (callback, delay) => {
  setTimeout(() => {
    id = "첫 번째";
    callback(id);
    setTimeout(() => {
      id = "두 번째";
      callback(id);
      setTimeout(() => {
        id = "세 번째";
        callback(id);
      }, delay);
    }, delay);
  }, delay);
};
// 위에껄 풀어서 아래처럼.
const callback1 = (id) => {
    console.log(`[order: ${id}]함수 시작 시간: ${new Date().toString()}`)
  }

// printInLater(callback,1000)
// function first(callback,delay){
//     id = '첫 번째'
//     setTimeout(()=>{
//         callback(id);
//         return second(callback,delay)
//     },delay)
// }
// function second(callback,delay){
//     id = '두 번째'
//     setTimeout(()=>{
//         callback(id);
//         return third(callback,delay)
//     },delay)
// }
function third(callback,delay){
    id = '세 번째'
    setTimeout(()=>{
        callback1(id);
    },delay)
}
// first(callback,1000)
function a(a){
console.log(a);
}
function a(a,b){
  console.log(a)
}

a(1)
a(2,1)


function first(a,delay){
    return new Promise(resolve =>{
      setTimeout(() => {
            id = '첫번째';
            callback1(id)
            resolve(second(a,1000));
        }, delay);
    })
}
function second(callback,delay){
    
    return new Promise(resolve =>{ 
      id = '두번째';
      setTimeout(() => {
            resolve
            callback1(id)
            return third(callback,1000)
        }, delay)
      }
  )
}

first(callback1,1000)
.then(resolve =>{
  console.log(resolve);
})
// async function third(callback,delay){
//     id = '세번째'
//     setTimeout(() => {
//         callback(id);
//     }, delay);
// };

// first(callback,1000)
// .then(
//     resolve => console.log(resolve)
// ).then(
    
// )


