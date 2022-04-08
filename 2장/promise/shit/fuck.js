// doSomething1(function (result1) {
//   doSomething2(
//     result1,
//     function (result2) {
//       doSomething3(
//         result2,
//         function (finalResult) {
//           console.log("최종 실행 결과: " + finalResult);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);



doSomething1().then(function(result1){
  return doSomething2(result1);
})
.then(function(result2){
  return doSomething3(result2);
})
.then(function(result3){
  console.log('최종 실행 결과' + result3);
})
