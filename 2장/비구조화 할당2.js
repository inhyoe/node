var Human = function(type) { // 생성자 함수
    // JS에서는 함수를 객체로 취급
    this.type = type || 'human';
  };
  
  Human.isHuman = function(human) { // 속성
    return human instanceof Human;
  }
  
  Human.prototype.breathe = function() { // 1개짜리
    alert('h-a-a-a-m');
  };
  
  var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments); // 상속 시킴
    this.firstName = firstName;
    this.lastName = lastName;
  };
  
  Zero.prototype = Object.create(Human.prototype);
  Zero.prototype.constructor = Zero; // 상속하는 부분
  Zero.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
  };
  var oldZero = new Zero('human', 'Zero', 'Cho');
  Human.isHuman(oldZero); // true