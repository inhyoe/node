function findAndSaveUser(Users){
    Users.findOne({},(err, user) =>{
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if(err){
                return console.error(err);
            }
            Users.findOne({gender : 'm'}, (err, user) => {
                //세번째 콜백 ) 생략.
            })
        })
    })
}
// 이 코드의 문제점 . 갈수록 코드의 깊이가 길어지며 err구문도 따로 처리를 해주어야함.

// findOne, save가 프로미스를 지원할경우

function findAndSaveUser1(Users){
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => users.findOne({gender:'m'}))
    .then((user) =>{

    })
    .catch(err => {
        console.err(err);
    })
}