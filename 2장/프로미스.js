// const condition = true; // true면 resolve, false면 reject
// const promise = new Promise(// 프로미스 객체 생성
//     (resolve, reject) => { // 콜백함수 : 파라미터
//         if (condition) {
//             resolve('성공'); // resolve 함수를 호출한다
//         } else {
//             reject('실패');  // reject 함수를 호출한다.
//         }
//     });
// // 다른 코드가 들어갈 수 있음
// // 2. 사용규칙 : 생성된 객체에 then(),catch(),finally()호출
// promise
//     .then((message) => {      // resolve(인자값)이 호출되면 message = 인자값으로 되어서 콜백 실행
//         console.log(message); // 성공(resolve)한 경우 실행
//     })
//     .catch((error) => {       // reject(인자값)이 호출되면 error=인자값 으로 호출되어서 콜백 실행
//         console.error(error); // 실패(reject)한 경우 실행
//     })
//     .finally(() => { // 끝나고 무조건 실행
//         console.log('무조건');
//     });

// promise
//     .then((message) => {
//         return new Promise((resolve, reject) => {
//             resolve(message+1);
//         });
//     })
//     .then((message2) => { // 성공1
//         console.log(message2);
//         return new Promise((resolve, reject) => {
//             resolve(message2+2);

//         });
//     })
//     .then((message3) => {  
//         console.log(message3);// 성공 12
//         console.log(message3+3); // 성공 123
//     })
//     .catch((error) => { // .으로 연결된 것을 체이닝이라고함.
//         console.error(error);
//     });

const reject3 = Promise.reject('실패111')
const promise1 = Promise.resolve('성공1')
const promise2 = Promise.resolve('성공2')
// const promise2 = Promise.reject('성공2')

Promise.all([promise1, promise2, reject3])
    .then((result_msg) => {
        console.log(result.msg);
    })
    .catch((err) => {
        console.log(err);
    })


const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let status = Math.floor(Math.random() * 2);
        console.log(status);
        if (status) { resolve("성공"); }
        else { reject("실패"); }
    }, 1000)
}); myPromise.then(n => console.log(`${n} 하였습니다.`)).catch(n => console.log(`${n} 하였습니다.`));



function buy_normal(item, price, quantity) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("계산할 시간이 필요합니다.");
            var total = price * quantity; resolve(total);
        }, 1000);
        
    })
} function pay(tot) { console.log(tot + "원을 지불하였습니다."); } 
buy_normal("공기청정기", 50000, 5).then(n => pay(n));
