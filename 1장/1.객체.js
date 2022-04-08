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