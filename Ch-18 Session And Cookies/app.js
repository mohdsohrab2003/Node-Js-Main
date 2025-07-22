const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoDBStore = require("connect-mongodb-session")(session);
const path = require("path");
const DB_Path =
  "mongodb+srv://sohrabmohd2003:Sohrabmohd%402003@airbnb.bwowdtu.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Airbnb";
// const rootDir = require("./utils/pathUtis");
const { userRoutes } = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const { authRouter } = require("./routes/authRouter");
const errorController = require("./controller/error");
const { mongoConnect } = require("./utils/databaseUtil");
const { default: mongoose } = require("mongoose");
const app = express();

const store = new MongoDBStore({
  uri: DB_Path,
  collection: "sessions", // Collection name for storing sessions
});

app.use(
  session({
    secret: "this is First Secret", // ✅ REQUIRED
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn; // Set isLoggedIn from cookie or default to false
  next();
});
app.use(authRouter);
app.use(userRoutes);
app.use(hostRouter);

const PORT = 8080;
app.use(errorController.pageNotFound);

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
