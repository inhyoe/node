function delay(ms) {
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve("done"),ms)
    }) 
  }
  
  delay(1000).then(() => console.log('3초후 실행'));