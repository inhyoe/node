const fs = require('fs')

const readStream = fs.createReadStream('writeFile.txt')

const writeStream = fs.createWriteStream('writeme2.txt')


readStream.pipe(writeStream);
