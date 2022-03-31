
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
  console.log(getCandy);
  console.log(count);

  var array = ['nodejs', {}, 10, true];
  var node = array[0];
  var obj = array[1];
  var bool = array[3];