
const obj = {
    name : "kyle",
    a: ()=>console.log(this),
    getname : function(){
        console.log(this);
        // setTimeout(()=>{
        //     console.log(this);
        // })
        console.log(this)
    }
}
console.log(this)
obj.getname()
console.log(obj.a == this)
