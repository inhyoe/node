// 초기코드

// loadScript('1.js', step1); 
// function step1(error, script) { 
//   if (error) { 
//     handleError(error); 
//     } else { 
//     loadScript('2.js', step2); 
//  } 
// } 
// function step2(error, script) { 
//   if (error) { 
//     handleError(error); 
//     } else { 
//     loadScript('3.js', step3); 
//  } 
// } 
// function step3(error, script) { 
//   if (error) { 
//     handleError(error); 
//     } else { 
//     // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*) 
//  } 
// }; 



const step1 = new Promise((resolve,reject)=>{
  resolve('Step1 success!')
})
const step2 = new Promise((resolve,reject)=>{
  resolve('Step2 success!')
})
const step3 = new Promise((resolve,reject)=>{
  resolve('Step3 success!')
})


step1
.then((result) => {
    console.log(result);
    return step2
})
.then(resolve =>{
  console.log(resolve);
  return step3
})
.then(resolve =>{
  console.log(resolve);
})

// async function a(){
//   const awaitStep1 = await step1;
//   console.log(awaitStep1);
//   const awaitStep2 = await step2;
//   console.log(awaitStep2);
//   const awaitStep3= await step3;
//   console.log(awaitStep3);
// }


// const step1 = new Promise((resolve, reject) => {
//     resolve('Step1!');
//   });
//   const step2 = new Promise((resolve, reject) => {
//     resolve('Step2!');
//   });
//   const step3 = new Promise((resolve, reject) => {
//     resolve('Step3!');
//   });
  
  
  // step1.then((resolve) => {
  //   console.log("Step1 success!");
  //   step2.then((resolve) => {
  //       console.log("Step2 success!");
  //       step3.then((resolve) => {
  //         console.log("Step3 success!");
  //       }).catch(error =>{
  //         console.log(errror);
  //       })
  //   }).catch(error =>{
  //     console.log(error);
  //   });
  // }).catch(reject =>{
  //   console.log(error);
  // });

//   step1.then((resolve) =>{
//       console.log(`${resolve} success!`);
//       return step2
//   })
//     .then((resolve)=>{
//       console.log(`${resolve} success!`);
//      return step3
//     })
//     .then((resolve)=>{
//         console.log(`${resolve} success!`);
//     })

//   async function me(){
//     var step12 = await step1
//     console.log(step12);
//     var step23 = await step2
//     console.log(step23);
//     var step33 = await step3
//     console.log(step33);
//   }

  // me();
  

// async function(){
//     step1 = await 
// }