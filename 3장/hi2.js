const fs = require('fs').promises;
let text = ''
fs.readFile('a.txt')
    .then((dataA) => {
        text = text + dataA
        return fs.readFile('b.txt')
    })
    .then((dataB) => {
        text = text + dataB
        return fs.readFile('c.txt')
    })
    .then((dataC) => {
        text = text + dataC
        console.log(text)
    })
    .catch((err) => console.log(err))