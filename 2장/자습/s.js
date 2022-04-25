// const printInLater = (callback, delay) => {
//   setTimeout(() => {
//     id = "첫 번째";
//     callback(id);

//     setTimeout(() => {
//       id = "두 번째";
//       callback(id);
//       setTimeout(() => {
//         id = "세 번째";
//         callback(id);
//       }, delay);
//     }, delay);
//   }, delay);
// };
const callback = (id) => {
    console.log(`[order: ${id}]함수 시작 시간: ${new Date().toString()}`)
  }
// printInLater(callback,1000)

// function first(first,callback){
//     console.log(first);
//     return callback
// }
// function second(first,callback){
//     console.log(first);
//     return callback
// }
// function third(first,callback){
//     console.log(first);
//     return callback
// }
// first('첫번째',setTimeout((
// )=>{console.log('첫번째거');},1000))
// second('두번째',setTimeout((
//     )=>{console.log('두번째거');},1000))
// third('세번째',setTimeout((
    // )=>{console.log('세번째거');},1000))

// 상수를 넣어주는 실행은 비동기적 실행
// const first = new Promise((resolve,reject)=>{
    
//     setTimeout(() => {
//         resolve('첫번째거')
//     }, 1000);
//     console.log('첫번째');
// })
// const second = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('두번째거')
//     }, 1000);
//     console.log('두번째');
// })
// const third = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('세번째거')
//     }, 1000);
//     console.log('세번째');
// })
// first.then((resolve) => {
//     console.log(resolve);    
//     second.then((resolve)=>{
//         console.log(resolve);
//         third.then((resolve)=>{
//             console.log(resolve);
//         }
//         )
//     })
// })




function first(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('첫번째꺼')
        }, 1000);
        console.log('첫번!');
    })
}
function second(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('두번째꺼')
        }, 1000);
        console.log('두번!');
    })
}
function third(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('세번째꺼')
        }, 1000);
        console.log('세번!');
    })
}
// 함수 실행은 비동기적 실행
first()
.then((resolve)=>{
    console.log(resolve);
    return second()
})
.then(resolve=>{
    console.log(resolve);
    return third()
}).then((resolve)=>{
    console.log(resolve);
})


// first('첫번째',setTimeout(()=>{
//     console.log('첫번째거');
//     return second('두번째',setTimeout(()=>{
//         console.log('첫번째거');
//         return third('세번째',setTimeout(() => {
//             console.log('세번째거');
//         }, 1000))
//     },1000))
// },1000))

// const step1 = new Promise((resolve, reject) => {
//     resolve('Step1!');
//   });
//   const step2 = new Promise((resolve, reject) => {
//     resolve('Step2!');
//   });
//   const step3 = new Promise((resolve, reject) => {
//     resolve('Step3!');
//   });
  
  
//   step1.then((resolve) => {
//     console.log("Step1 success!");
//     setTimeout(()=>{
//         console.log(resolve);
//     },1000)
//     step2.then((resolve) => {
//         console.log("Step2 success!");
//         setTimeout(()=>{
//             console.log(resolve);
//         },1000)
//         step3.then((resolve) => {
//           console.log("Step3 success!");
//           setTimeout(()=>{
//             console.log(resolve);
//         },1000)
//         }).catch(error =>{
//           console.log(errror);
//         })
//     }).catch(error =>{
//       console.log(error);
//     });
//   }).catch(reject =>{
//     console.log(error);
//   });
  

// var promise1 = new Promise(function (resolve, reject) {

// 	// 비동기를 표현하기 위해 setTimeout 함수를 사용 
// 	setTimeout(function () {

// 		// 해결됨 
// 		console.log("첫번째 Promise 완료");
// 		resolve("11111");

// 	}, Math.random() * 2000 + 1000);
// });

// var promise2 = new Promise(function (resolve, reject) {

// 	// 비동기를 표현하기 위해 setTimeout 함수를 사용 
// 	setTimeout(function () {

// 		// 해결됨 
// 		console.log("두번째 Promise 완료");
// 		resolve("222222");

// 	}, Math.random() * 1000 + 1000);
// });

// promise1.then((resolve) => {
//     console.log(resolve);
//     return promise2
// }).then(resolve =>{
//     console.log(resolve);
// })
// .catch((err) => {
    
// }); 


// Promise.all([promise1, promise2]).then(function (values) {
// 	console.log("모두 완료됨", values);
// })