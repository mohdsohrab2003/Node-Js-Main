console.log('1. Start concept');

Promise.resolve().then(()=>console.log('2.microstak'))

setTimeout(()=>console.log("3. Timmer"))

const fs=require('fs');
fs.readFile('user.txt','utf-8',()=>console.log('4. I/O operation '))

setImmediate(()=> console.log('5.Time out'))

process.on( 'exit',(code)=>{
    console.log('6. Event Exits');
})
console.log('7. End of Script')