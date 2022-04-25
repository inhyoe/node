const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcedfg.js',(err) =>{
        if(err){
            console.log(err);
        }
    })
}, 1000);