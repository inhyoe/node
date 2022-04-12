function add1( x , y){
    return x+y;
}
const add2 = ( x , y) => {
    return x+y;
}

const add3 = (x,y) =>x+ y; // 대괄호로 감싸주면 return값을 줘야함

const add4 = (x,y) => (x+y); // 햇갈릴 우려때문에 소괄호로 감싸줌

const obj = (x,y) =>{
    return {x:x,y:y} // 비구조화 할당 기능
}
const obj2 = (x,y) =>{
    return {x,y} // 비구조화 할당
}

const obj3 = (x,y) => ({x,y}) // return {} 생략 및 () 추가 대괄호가 함수의 바디부분인지 객체부분인지 모름,

//그럼 왜 안사라졌냐?

// this때문이다

var relationship = {
    name : 'zero',
    friends : [ 'nero','hero','xero'],
    logFriends: function(){
        var that = this;// zero
        this.friends.forEach(function(friends){
            console.log(this.name,friends);
            // 여기서의 this는 function(friends)임.
        })
    }
}
relationship.logFriends();
// 문제 해결


var relationship2 = {
    name : 'zero',
    friends : [ 'nero','hero','xero'],
    logFriends: function(){
        var that = this;// zero
        this.friends.forEach((friends) => {
            console.log(this.name,friends);
            // 여기서의 this는 화살표 함수이므로 자기 자신을 가르키지않고
            // 부모의 this를 가르킴.
        })
    }
}
relationship2.logFriends();
// 단적인 예를 또 보자

button.addEventListner('click',function(){
    console.log(this.textContent); // 이것은 button에 적혀있는 글자를 출력함
                                    // 왜? button이 자기 자신이니까
})
this;
button.addEventListner('click',()=>{
    console.log(this.textContent); // 이것은 밖의 따로 정의된 this를 사용함.
                                    // 왜? button이 부모가 아니니까
})

// 이걸 바꿔주려면
button.addEventListner('click',(e) => {
    console.log(e.target.textContent); // 아예 사용법이 다름
})