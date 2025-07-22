const express = require("express");
const path = require("path");
// const rootDir = require("./utils/pathUtis");
const { userRoutes } = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const errorController = require("./controller/error");
const { mongoConnect } = require("./utils/databaseUtil");
const { default: mongoose } = require("mongoose");
app.use(userRoutes);
app.use(hostRouter);

const PORT = 8080;
app.use(errorController.pageNotFound);

// mongoConnect(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//   });
// });

const DB_Path =
  "mongodb+srv://sohrabmohd2003:Sohrabmohd%402003@airbnb.bwowdtu.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Airbnb";
mongoose
  .connect(DB_Path)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log("Connected Sucessfully with MongoDB");
    });
  })
  .catch((err) => {
    console.log("Error while connecting mongoose", err);
  });
