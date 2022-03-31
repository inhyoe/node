// 1. async 함수 만들기

async function findAndSaveUser(Users) {
  //2. 비동기 코드에 awake
  //const findAndSaveUser = async function(users){}
  //const findAndSaveUser = async (Users) ->{}
  
  //3. error 처리를 위해서는 try~catch 사용
  try{
  let user = await Users.findOne({})
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({gender: 'm'})
}catch(err){
  console.error(err);
}
    // .then((user) => {
    //   user.name = 'zero';
    //   return user.save();
    // })
    // .then((user) => {
    //   return Users.findOne({ gender: 'm' });
    // })
    // .then((user) => {
    //   // 생략
    // })
    // .catch(err => {
    //   console.error(err);
    // });
}