// https://ko.javascript.info/object-methods

let user = {
  // ...
};

// 함수 선언
function sayHi() {
  console.log("안녕하세요!");
  // user객체 내부에 sayHi함수가 없어도 사용 가능
};

// 선언된 함수를 메서드로 등록
sayHi();
user.sayHi = sayHi;
console.log(user);
console.log(user.sayHi);
user.sayHi(); // 안녕하세요!

user = { name: "John" };
admin = { name: "Admin" };


function sayHi2(){
  console.log(this.name);
}
// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi2;
admin.f = sayHi2;
console.log(user);
console.log(admin);

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)