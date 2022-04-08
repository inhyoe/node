// function helloWorld(){
//     console.log('Hello Wolrd');
//     helloNode();
// }

// function helloNode(){
//     console.log('Hello Node');
// }

// helloWorld();
// const fs = require('fs');

// fs.readFile('a.txt', function(err, dataA){
//   if(err) console.error(err);
//   fs.readFile('b.txt', function(err, dataB){
//     if(err) console.error(err);
//     fs.readFile('c.txt', function(err, dataC){
//       if(err) console.error(err);
//       setTimetout(function(){
//         fs.writeFile('d.txt', dataA+dataB+dataC, function(err){
//           if(err) console.error(err);
//         }, 60 * 100);
//       });
//     });
//   });
// });
// const fs = require('fs').promises;

// let txt = ''
// function step1(script,err){
//     if(err){
//         console.error(err);
//     }else{
//         txt = txt + script;
//         step2('a.txt',step2)
//     }
// }
// function step2(script,err){
//     if(err){
//         console.error(err);
//     }else{
//         txt = txt + script;
//         return step3('b.txt',step3)
//     }
// }
// function step3(script,err){
//     if(err){
//         console.error(err);
//     }else{
//         txt = txt + script;
//         step4('c.txt',step4)
//     }
// }
// function step4(script,err){
//     if(err){
//         console.error(err);
//     }else{
//         txt = txt + script;
//         console.log(script);
//         console.log(txt);
//     }
// }
let txt = ''
// function step1(script){
//         txt = txt + script;
//         step2('b',step2)
    
// }
// function step2(script){
    
//         txt = txt + script;
//         step3('c',step3)
    
// }
// function step3(script){
    
//         txt = txt + script;
//         step4('c',step4)
    
// }
// function step4(script){
//         console.log(txt);
//     }

new Promise((resolve,reject)=>{
    let txt = 'a';
    resolve(txt);
})
.then((prevTxt)=>{
    return new Promise((resolve)=>{
        let txt = prevTxt+'b';
        resolve(txt);
    })
    
})
.then((prevTxt)=>{
    return new Promise((resolve)=>{
        let txt = prevTxt+'c';
        resolve(txt);
        console.log(txt);
    })
})
let tex = ''
const promise = new Promise((resolve,reject)=>{
    tex = 'a';
    resolve(tex)
})

promise.then((prev)=>{
    tex = prev + 'b'
    return tex;
})
.then((prev)=>{
    tex = prev + 'c'
    console.log(tex);
})
console.log('시작');

// fs.readFile('a.txt')
//     .then((dataA) => fs.readFile('b.txt') + dataA)
//     .then((dataB) => fs.readFile('c.txt') + dataB)
//     .then((dataC) => {
//         setTimeout(() => {
//             fs.writeFile('d.txt', dataC, 60 * 100);
//         },60 * 10);
//     })
//     .catch((err) => console.log(err))

// const fs = require('fs').promises;
// let text = ''
// fs.readFile('a.txt')
//     .then((dataA) => {
//         text = text + dataA.toString()
//         return fs.readFile('b.txt')
//     })
//     .then((dataB) => {
//         text = text + dataB.toString()
//         console.log(text.toString());
//         return fs.readFile('c.txt')
//     })
//     .then((dataC) => {
//         setTimeout(() => {
//             text = text+ dataC.toString();
//             console.log(text);
//             console.log(dataC.toString());
//             console.log('d.txt : ', text.toString())
//         }, 1000);
        
//     })
//     .catch((err) => console.log(err))