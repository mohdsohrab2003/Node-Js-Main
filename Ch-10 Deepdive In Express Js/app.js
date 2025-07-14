const express= require('express');
const bodyParse= require('body-parser');
const app=express();

//first middle ware
app.get("/",(req,res,next)=>{
    console.log("First MiddleWare",req.url,req.method);
    res.send("<p>Welcome to complete secong middelware coding<p/>")
    next();
})
//second middle ware
app.get("/contact-us",(req,res,next)=>{
    console.log("Second MiddleWare",req.url,req.method);
    res.send(`
        <html>
        <head>
          <title>Simple Form</title>
        </head>
        <body>
          <h1>Submit Your Details</h1>
          <form action="/contact-us" method="POST">
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />
        
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />
        
            <button type="submit">Submit</button>
          </form>
        </body>
        </html>
        `);
})
app.use(bodyParse.urlencoded());
app.post("/contact-us",(req,res,next)=>{
    console.log("Third MiddleWare",req.url,req.method, req.body);
   res.send(`<p>your email is ${req.body.email} and your name is ${req.body.name} </p>`)

    
})


const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);

})



