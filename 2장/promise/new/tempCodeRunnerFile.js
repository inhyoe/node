function step1(script) { 
  return new Promise((resolve,reject) =>{
    if(resolve){
        
        resolve(script)
    }else
        console.error(reject);
  })
 } 

 function step2(script) { 
    return new Promise((resolve,reject) =>{
      if(resolve){
          resolve(script)
      }else
          console.error(reject);
    })
   } 

   function step3(script) { 
    return new Promise((resolve,reject) =>{
      if(resolve){
          resolve(script)
      }else
          console.error(reject);
    })
   } 
   function err(script){
       return new Promise((resolve,reject) =>{
           reject(new Error(script));
       })
   }
  
// step1('Hello')
// .then((result) => {
//     console.log(result);
//     return step2('World')
// }).then((result)=>{
//     console.log(result);
//     return step3('JavaScript')
// }).then((result)=>{
//     console.log(result);
//     return err('에러!')
// }).catch((error)=>{
//     console.log(error);
// })
step1('hello')
.then(()=>step2()).then(()=> step3()).then( ()=> err()).catch(err => console.log(err))


