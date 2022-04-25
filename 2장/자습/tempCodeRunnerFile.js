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

