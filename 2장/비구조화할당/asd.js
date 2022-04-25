// 구조 분해 할당 (객체)
var numbers = {
    zero: 0,
    one: 1,
    two: 2,
  };
  var { one, two, zero } = numbers;
  console.log(zero, one, two); // 0 1 2
  
  var { zero:num1, one:num2, two:num3 } = numbers;
  console.log(num1, num2, num3); // undefined undefined undefined

var numbers = [0, 1, 2];
var [zero, one=99 , two, three=3 ] = numbers;
console.log(zero, one, two, three); // 0 1 2 3 undefined가 아니라면 값 할당x
