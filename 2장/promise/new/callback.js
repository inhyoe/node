const time = () => (parseInt(Math.random() * 10) + 1) * 10000;

// const 아반떼 = cb => {
//     setTimeout(()=>{
//         console.log('아반떼 End')
//         cb()
//     }
//     ,time())
//     console.log('아반떼 Go')
// }
// const 소나타 = cb => {
//     setTimeout(()=>{
//         console.log('소나타 End')
//         cb()
//     },time())
//     console.log('소나타 Go')
// }
// const 제네시스 = cb => {
//     setTimeout(()=>{
//         console.log('제네시스 End')
//         cb()
//     }
//     ,time())
//     console.log('제네시스 Go')
// }

// function 아반떼(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("아반테 out");
//           }, 1200);
//           console.log("아반테 go");
//     })
// }
// function 람보르기니(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("람보르기니 out");
//           }, 1200);
//           console.log("람보르기니 go");
//     })
// }
// function 카마로(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("카마로 out");
//           }, 1200);
//           console.log("카마로 go");
//     })
// }
// function 페라리(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("페라리 out");
//         }, 1200);
//         console.log("페라리 go");
//     })
// }
const 아반떼 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("아반테 out");
    }, 1200); 
    console.log("아반테 go");
});
const 람보르기니 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("람보르기니 out");
    }, 1000);
    console.log("람보르기니 go");
});

const 카마로 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("카마로 out");
    }, 1500);
    console.log("카마로 go");
});

const 페라리 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("페라리 out");
    }, 2000);
    console.log("페라리 go");
})

async function a(){
    const 아반 = await 아반떼;
    console.log(아반);
    const 람보 = await 람보르기니;
    console.log(람보);
}
a()

// 아반떼.then(
//     resolve =>{
//         console.log(resolve);
//         return 람보르기니;
//     }
// ).then(
//     resolve =>{
//         console.log(resolve)
//         return 카마로;
//     }
// ).then(
//     resolve =>{
//         console.log(resolve);
//         return 페라리;
//     }
// ).then(
//     resolve =>{
//         console.log(resolve)
//         console.log('끝');
//     }
// )

// async function a(){
//     const 아반떼1 = await 아반떼;
//     console.log(아반떼1);
//     const 람보르기니1 = await 람보르기니;
//     console.log(람보르기니1);
//     const 페라리1 = await 페라리;
//     console.log(페라리1);
//     const 카마로1 = await 카마로;
//     console.log(카마로1);
// };
// a();

//(
  // console.log("경기시작")
  // 아반떼(()=>{
  //     소나타(()=>{
  //         제네시스(()=>{
  //             console.log("경기 종료")
  //         })
  //     })
  // })

  //  function 아반떼1(){
  //     return new Promise((resolve)=>{
  //     setTimeout(() => {
  //         resolve('아반떼 End')
  //     }, time);
  //     console.log('아반떼 Go');
  // })}

  //  function 소나타1(){
  //      return new Promise((resolve)=>{
  //     setTimeout(() => {
  //         resolve('소나타 End')
  //     }, time);
  //     console.log('소나타 Go');
  // })}

  // function 제네시스1() {
  //     return new Promise((resolve)=>{
  //     setTimeout(()=>{
  //         resolve('제네시스end')
  //     },time)
  //     console.log('제네시스 Go');
  // })}

  // 아반떼1()
  // .then(
  //     resolve =>{
  //         console.log(resolve)
  //         return 소나타1()
  //     }
  // )
  // .then(
  //     data =>{
  //     console.log(data)
  //     return 제네시스1()
  //     }
  // )
  // .then(
  //     data =>{
  //         console.log(data);
  //     }
  // )

//   async () => {
//     try {
//       console.log("시작!");
//       let 아반떼 = await 아반떼1();
//       console.log(아반떼);
//       let 소나타 = await 소나타1();
//       console.log(소나타);
//       let 제네시스 = await 제네시스1();
//       console.log(제네시스);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// )();

// var 아반떼 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('아반떼 end')
//         },time)
//         console.log('아반떼 go');
//     })
// }

// var 소나타 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('소나타 end')
//         },time)
//         console.log('소나타 go');
//     })
// }
// var 제네시스 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('제네시스 end')
//         },time)
//         console.log('제네시스 go');
//     })
// }

// console.log('경기 시작!');

// 아반떼()
// .then(
//     data=>{
//         console.log(data);
//         return 소나타()
//     }
// ).then(
//     data=>{
//         console.log(data);
//         return 제네시스()
//     }
// ).then(
//     data=>{
//         console.log(data);
//         console.log('끝');
//     }
// )
// async function init(){
//     console.log('시작');
//     let a = await 아반떼()
//     console.log(a);
//     let b = await 소나타()
//     console.log(b);
//     let c = await 제네시스()
//     console.log(c);
//     console.log('끝');
// }
// init();

// loadScript('1.js', function(error, script) {

//     if (error) {
//       handleError(error);
//     } else {
//       // ...
//       loadScript('2.js', function(error, script) {
//         if (error) {
//           handleError(error);
//         } else {
//           // ...
//           loadScript('3.js', function(error, script) {
//             if (error) {
//               handleError(error);
//             } else {
//               // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
//             }
//           });

//         }
//       })
//     }
//   });

// loadScript('1.js', step1);

// function step1(errr,script){
//     if(error){
//         handleError(error);
//     }else{
//         loadScript('2,js',step2)
//     }
// }
// function step2(errr,script){
//     if(error){
//         handleError(error);
//     }else{
//         loadScript('3,js',step3)
//     }
// }
// function step3(errr,script){
//     if(error){
//         handleError(error);
//     }else{
//         console.log('끝~~')
//     }
// }

// // -->

// loadScript('1.js');

// new Promise(function(reslove,reject){
//     if(reject){
//         console.error(err);
//     }else{
//         resolve('1.js')
//     }
// })

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
//     step2.then((resolve) => {
//         console.log("Step2 success!");
//         step3.then((resolve) => {
//           console.log("Step3 success!");
//         }).catch(error =>{
//           console.log(errror);
//         })
//     }).catch(error =>{
//       console.log(error);
//     });
//   }).catch(reject =>{
//     console.log(error);
//   });
//   step1.then((resolve)=>{
//       console.log('step1 success');
//       console.log(resolve);
//   }).then((resolve) =>{
//     console.log('step2 success');
//     console.log(resolve);
//   }).then((resolve)=>{
//     console.log('step2 success');
//     console.log(resolve);
//   }).catch((reject)=>{
//       console.log('failed');
//   })
