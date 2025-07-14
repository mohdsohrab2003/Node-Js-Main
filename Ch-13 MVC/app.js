const express = require("express");
const path = require("path");
const rootDir = require("./utils/pathUtis");
const { userRoutes } = require("./routes/userRoutes");
const { addHomeRoutes } = require("./routes/addHomeRoutes");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const errorController = require("./controller/error");
app.use(userRoutes);
app.use(addHomeRoutes);

const PORT = 8080;
app.use(errorController.pageNotFound);

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
