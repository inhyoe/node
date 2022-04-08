function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("job1 failed");
    }, 2000);
    
  });
};
function job2() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("job2 ok");
      }, 2000);
    });
  };
/* job1().then(function (data) {
  console.log("data1 :", data);
  job2().then(function(data){
      console.log('data2 :', data);
  })
});
 */

job1().then((data)=>{
    console.log('data1 :' ,data);
    return job2();
})
.catch((data)=>{
    console.log('data1: ', data);
    return job2();
    /* return Promise.reject(); */ 
}) // catch문을 사용하여 에러처리가 가능하다. ( 중간에 끊기지 않는다. )
.then((data)=>{
    console.log('data :', data);
    
}) // 상 하단이 완벽히 똑같이 동작함.