
var candyMachine = {
    status: {
      name: 'node',
      count: 5,
    },
    getCandy: function () {// === getCandy(){
      
      this.status.count--; // this 는 글로벌
      return this.status.count;
    },
  };
  //old
  // var getCandy = candyMachine.getCandy;
  // var count = candyMachine.status.count;
  // console.log(getCandy);
  // console.log(count);
  
  
  //new
  const {getCandy, status:{count}} = candyMachine;
  // const {변수} = 객체로 객체 안의 속서을 변수명으로 사용 가능
  console.log(getCandy);
  console.log(count);

  var array = ['nodejs', {}, 10, true];
  var node = array[0];
  var obj = array[1];
  var bool = array[3];
  
  // == 

  const array2 = ['nodejs',{},10,true];
  const [node,obj, ,bool] = array;
  // 각 배열 인덱스와 변수가 대응.