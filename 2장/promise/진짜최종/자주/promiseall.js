function setTimeoutPromise(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  }
  
  async function fetchAge(id) {
    await setTimeoutPromise(1000);
    console.log(`${id} 사원 데이터 받아오기 완료!`);
    return parseInt(Math.random() * 20, 10) + 25;
  }
  
  async function startAsyncJobs() {
    let ages = [];
    for (let i = 0; i < 10; i++) {
      let age = await fetchAge(i);
      ages.push(age);
    }
  
    console.log(
      `평균 나이는? ==> ${
        ages.reduce((prev, current) => prev + current, 0) / ages.length
      }`
    );
  }
  
  startAsyncJobs();
  