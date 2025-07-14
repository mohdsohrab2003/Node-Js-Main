const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(userRouter);
app.use(express.urlencoded({ extended: true }));

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on port https://localhost:${port}`);
});
