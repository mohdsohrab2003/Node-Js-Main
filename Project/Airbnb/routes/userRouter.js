const express = require('express');

const userRouter=express.Router();

userRouter.get('/',(req,res)=>{
    res.send(`<p>Welcome to airbnb home page</p>
        <a href="/register">register</a>    
   `);
})

module.exports=userRouter;