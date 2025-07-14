const express = require("express");

const registerRoutes = require("./routes/registerRoutes");
const contactUsRoutes = require("./routes/contactUsRoutes");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(registerRoutes);
app.use(contactUsRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
