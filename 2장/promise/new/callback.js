const time = ()=>(parseInt(Math.random()*10)+1)*1000

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

// console.log("경기시작")
// 아반떼(()=>{
//     소나타(()=>{
//         제네시스(()=>{
//             console.log("경기 종료")
//         })
//     })
// })

var 아반떼 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('아반떼 end')
        },time)
        console.log('아반떼 go');
    })
}

var 소나타 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('소나타 end')
        },time)
        console.log('소나타 go');
    })
}
var 제네시스 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('제네시스 end')
        },time)
        console.log('제네시스 go');
    })
}

console.log('경기 시작!');

아반떼()
.then(
    data=>{
        console.log(data);
        return 소나타()
    }
).then(
    data=>{
        console.log(data);
        return 제네시스()
    }
).then(
    data=>{
        console.log(data);
        console.log('끝');
    }
)
async function init(){
    console.log('시작');
    let a = await 아반떼()
    console.log(a);
    let b = await 소나타()
    console.log(b);
    let c = await 제네시스()
    console.log(c);
    console.log('끝');
}
init();

loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
            }
          });
  
        }
      })
    }
  });

loadScript('1.js', step1);

function step1(errr,script){
    if(error){
        handleError(error);
    }else{
        loadScript('2,js',step2)
    }
}
function step2(errr,script){
    if(error){
        handleError(error);
    }else{
        loadScript('3,js',step3)
    }
}
function step3(errr,script){
    if(error){
        handleError(error);
    }else{
        console.log('끝~~')
    }
}

// -->

loadScript('1.js');

new Promise(function(reslove,reject){
    if(reject){
        console.error(err);
    }else{
        resolve('1.js') 
    }
})

