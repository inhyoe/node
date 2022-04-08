function timer(time){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(time)
        }, 1000);
    })
}

/* timer(1000)
.then(function(time){
    console.log("time: "+time);
    return timer(time+1000);
})
.then(function(time){
    console.log("time: "+time);
    return timer(time+1000);
})
.then(function(time){
    console.log("time: "+time);
    timer(time+1000);
}); */
async function run(){
    console.log('start');
    var time = await timer(1000);
    console.log('time : ' + time);
    time = await timer(time+1000);
    console.log('time : ' + time);
    time = await timer(time+1000);
    console.log('time : ' + time);
    console.log('end');
}
/* console.log('parent start');
// console.log(run()); // promise이다.


console.log('parent end'); */
(async function run2(){
    console.log('parent start');
    await run()
    console.log('parents end');
})();
