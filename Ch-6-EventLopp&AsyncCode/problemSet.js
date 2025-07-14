const fs= require('fs');
console.log('1. Start of concept');

console.log('2. Reading File synchronously');
const dataSync=fs.readFileSync('user.txt','utf-8');
console.log('3. Synchronous read complete');

//Aysnchronous coding non-blocking coding
console.log("4.Read file synchronously");
fs.readFile('user.txt','utf-8',(err,dataSync)=>{
    if(err) throw err;
    console.log('6.Asynchronous read complete');
})
console.log('5. End of Script')


