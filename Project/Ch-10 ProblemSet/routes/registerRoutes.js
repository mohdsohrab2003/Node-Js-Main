const express = require("express");
const path = require("path");
const registerRoutes = express.Router();

const rootDir = require("../utils/pathUtils");

registerRoutes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "home.html"));
});

module.exports = registerRoutes;
