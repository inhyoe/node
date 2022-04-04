const axios = require('axios');

axios.get('/user?ID = 12345')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.error(error);
})
.then(function(){
    //항상 실행되는 영역
    console.log('always');
})

axios.get('/user',{
    params: {
        ID: 12345
      }
})
.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });  

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}