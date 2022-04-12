// 비밀번호는 암호화가 아닌 hash임
// 비밀번호 -> hash화 ==> 그 해시값이 서버에 저장되있는 것
// ex) ingyoe => fuck 이면
// ingyoe라는 값이 서버에 저장되는 것이 아닌 fuck이라는 해시값이 저장되어 있는 것


// 양방향 암호화
// Key가 사용됨
// Key라는 말에서 알 수 있듯 key값에 암호가 저장되어있기 때문에
// front-End -> Server 관계에서는 사용하지 않음.
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
console.log('result: ',result );
// let resultIng = decipher.update(result,'base64','utf8')
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
console.log(result2);
result2 += decipher.final('utf8');
console.log('복호화:', result2);