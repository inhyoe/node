// Synchronous 비동기적인 처리
// asyncronous 동기적인 처리




fetch('https://jsonplaceholder.typicode.com/posts') // 비동기적으로 동작할 가능성이 높다.
    .then(function(result){
    console.log('result', result);
})
    .catch(function(reason){
    console.log('reason', reason);
})