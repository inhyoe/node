function a() {
    console.log('a', this === exports, this === global);
}
const b = () => {
    console.log('b', this === exports);
};
a(); // false true
b(); // true

var a = () =>{
    (()=>{
        console.log(this)
    })()
}
a();
