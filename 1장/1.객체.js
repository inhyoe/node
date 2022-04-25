const user = {
    name: "John"
};


user.name = "Pete"; // (*)
// const값으로 user의 값을 고정하지만 그 내용은 고정하지 않음

alert(user.name); // Pete

let user = {
    name: "John",
    age: 30
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// 변수로 접근
alert(user[key]); // John (프롬프트 창에 "name"을 입력한 경우)
//  그런데 점 표기법은 이런 방식이 불가능합니다.

let user = {
    name: "John",
    age: 30
};

let key = "name";
alert(user.key) // undefined

function a(a,b){

}
const a = (a,b)=>{}
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                step5(function (value5) {
                    step6(function (value6) {
                        // Do something with value6
                    });
                });
            });
        });
    });
});

setTimeout(() => {
    function a(){
        function b(){

        }
    } 
}, timeout);
var a = 1;
var a = 2;

let b = 1;
b = 2;

const step2 = (a,b)=> a+b;

function step2(a,b){
    return ;
}
function (){
    
}
step1((value)=>{
    (value)=>{
        (value)=>{
            (value)=>{

            }
        }
    }
})