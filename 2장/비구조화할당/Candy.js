const candyMachine = {
    status : {
        name :'node',
        count :5
    },
    sex : function(){
        candyMachine.status.count--
        return candyMachine.status.count
    },
    // yas : function(){
    //     return 'ME'
    // }
}



var status1 = candyMachine.status;
console.log(candyMachine.sex())
console.log('status : ',status1);


const {status:{count},sex,status} = candyMachine;
console.log(sex());
console.log('구조분해 : ',count);
console.log('구조분해 : ',status);

// console.log('비구조화 : ',candyMachine.sex());
// console.log('비구조화 count : ',count);

// console.log(candyMachine.count === count);

// console.log(candyMachine.yas());

// const { yas } = candyMachine;
// console.log(yas()); 