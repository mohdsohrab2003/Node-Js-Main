const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/register", (req, res) => {
  res.send(`
        <h1>Register Page</h1>
        <form action="/register" method="POST">
        <label for="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label for="mobile">Mobile Number:</label><br />
        <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder="10-digit mobile number" required /><br /><br />

        <button type="submit">Submit</button>
        </form>
        `);
});

hostRouter.post("/register", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.send(`
        <p>Your Registration is successfully</p>
        <p>${req.body.name}</p>
        <p>${req.body.email}</p>
        <p>${req.body.mobile}</p>
        
        <a href="/">Go to Home</a>    
   `);
});
