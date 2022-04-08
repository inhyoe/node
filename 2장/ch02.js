if(true){
    var x = 3;
}
console.log(x); // anonymous 함수내

if(true){
    const y =3;
}
// console.log(y);  if블록 내에서 선언한 y를 사용시도 -->에러
// 컨트롤 백틱         if블록 내에서 선언한 y를 사용시도 -->에러

console.log(num);
var num; // 선언
num =6;  // 초기화

console.log(num);
let nun;
num = 6;


// const a = 1; 
// a = 1 재할당 불가
let b  = 1; 
// b= 1 재할당 가능
// const c ; // Error선언시 최초할당 필수

const num3 = 1;
const num4 = 2;
const res = 3;
console.log(
    `${num3} 더하기 ${num4}는 ${res}입니다`
);

