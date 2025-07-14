
//External Module
const express= require('express');

//Local Module
const requestHandler = require('./user');

const app= express();
app.use('/',(req, res, next)=>{
  console.log("Fisrt MiddleWare",req.url,req.method);
  next();
})
app.get('/submit-detail',(req, res, next)=>{
  console.log("Second  MiddleWare",req.url,req.method);
  res.send("<p>Welcome to complete secong middelware coding<p/>")
})

app.use('/',(req, res, next)=>{
  console.log("Another  MiddleWare",req.url,req.method);
  res.send("<p>Came form another MiddelWare<p/>")
  
})




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});