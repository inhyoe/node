//배열.map((요소, [인덱스], [배열]) => { return 요소 });

const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
  console.log('요소: ',v);
  // return v+1;
});
// 콘솔에는 1, 2, 3이 찍힘
console.log(oneTwoThree); // [1, 2, 3]
console.log(result); // [1, 2, 3]
oneTwoThree === result; // false

result = oneTwoThree.map((e,i,v)=>{
  console.log(`요소: ${e}`);
  console.log(`index: ${i}`);
  console.log(v);
    
})

// result = oneTwoThree.reduce((acc,cur,i)=>{
//     console.log(cur);
//     return acc+cur;
// },0) 

const newMyArr = oneTwoThree.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});

// for-Each와 map의 차이점 -> forEach는 return값이 없음 // map은 return값이 있음
//https://velog.io/@limes/Javascript-Array-Method-for-each-%EC%99%80-map%ED%95%A8%EC%88%98%EC%9D%98-%EC%B0%A8%EC%9D%B4