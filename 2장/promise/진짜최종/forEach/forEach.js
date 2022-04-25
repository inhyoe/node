// const myArr = [1, 2, 3, 4, 5];

// const newMyArr = myArr.forEach((currentElement, index, array) => {
//     console.log(`요소: ${currentElement}`);
//     console.log(`index: ${index}`);
//     console.log(array);
// });

// console.log(newMyArr); // undefined

// const arr = ['가','나','다','라']; 
// arr.forEach(function(item,index,arr2){ 
// 	console.log(item,index,arr2[index+1]); 
// })
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

const oneTwoThree = [1,2,3,4,5]

result = oneTwoThree.reduce((acc,cur,i)=>{
    console.log(acc,cur,i);
    console.log(acc+cur)
    return acc+cur;

},0) 

// console.log(result);

const friends = [
    {
      name: '양주진',
      age: 32,
      job: '코인러',
      married: false,
    },
    {
      name: '오영제',
      age: 32,
      job: '랩퍼',
      married: false,
    },
    {
      name: '서준형',
      age: 32,
      job: '2년차 유부남',
      married: true,
    }
  ];
  
  // 3명의 나이를 더해봅니다.
  // 여기서 초기값 설정이 반드시 필요합니다.
  const ageSum = friends.reduce((accumulator, currentObject) => {
      console.log(accumulator);
      console.log(currentObject);
    return accumulator + currentObject.name;
  },'');
  
  console.log('친구들 나이 합 ', ageSum);