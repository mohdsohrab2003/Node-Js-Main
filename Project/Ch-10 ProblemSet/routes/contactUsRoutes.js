const express = require("express");
const path = require("path");
const contactUsRoutes = express.Router();

const rootDir = require("../utils/pathUtils");

contactUsRoutes.get("/register", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "view", "ContactUs.html"));
});

module.exports = contactUsRoutes;
