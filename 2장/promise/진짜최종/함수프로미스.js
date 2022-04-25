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
