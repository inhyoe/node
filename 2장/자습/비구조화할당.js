var a ={
    status : {count :1},
 b :() =>{
     console.log(this)
  var candyMachine = {
    status: {
      nmae: "node",
      count: 5,
    },
    getCandy: () => {
        console.log(this)
      this.status.count--;
      return this.status.count;
    },
  };
  candyMachine.getCandy()
}
}


a.b()
// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, age = years, isAdmin = false } = user;

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// // 기본 변수 할당 (배열)
// var foo = ["one", "two", "three"];
// var [one, two, three] = foo;
// console.log(one); // "one"
// console.log(two); //"two"
// console.log(three); // "three"

// // 선언에서 분리한 할당
// var a, b; [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

// // 기본값 설정 ( 배열만 가능 )
// var a, b;
// [a=5, b=7] = [1];
// console.log(a); // 1
// console.log(b); // 7

// // 함수에서 반환된 배열

// function f() {
//     return [1, 2];
// }

// var a, b;
// [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2

// // 기본 변수 할당
// var o = {p: 42, q: true};
// var {p, q} = o;

// console.log(p); // 42
// console.log(q); // true

// // 선언에서 분리한 할당
// var a, b;
// ({a, b} = {a:1, b:2});
// console.log(a);
// console.log(b);

// // 새로운 변수 이름에 할당
// var o = {p: 42, q: true};
// var {p: foo, q: bar} = o;
// console.log(foo); // 42
// console.log(bar); // true
