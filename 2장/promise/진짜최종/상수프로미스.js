// 상수를 넣어주는 실행은 비동기적 실행 : 선언과 동시에 실행됨
const first = new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve('첫번째거')
    }, 1000);
    console.log('첫번째');
})
const second = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('두번째거')
    }, 1000);
    console.log('두번째');
})
const third = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('세번째거')
    }, 1000);
    console.log('세번째');
})
first.then((resolve) => {
    console.log(resolve);    
    second.then((resolve)=>{
        console.log(resolve);
        third.then((resolve)=>{
            console.log(resolve);
        }
        )
    })
})