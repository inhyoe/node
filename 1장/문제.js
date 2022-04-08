let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt('첫번째 값:', 0);
        this.b = +prompt('두번째 값:', 0);
    }
};

calculator.read();

alert(calculator.sum());
// 저장된 두 값을 반환
alert(calculator.mul());
// 저장된 두 값의 곱을 반환


let ladder = {
    step : 0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep : function(){
        alert(this.step)
    }
}