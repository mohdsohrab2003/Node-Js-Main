// Core Module
const express = require("express");

const addHomeRoutes = express.Router();
const homeController = require("../controller/home");

addHomeRoutes.get("/add-home", homeController.getAddHome);

addHomeRoutes.post("/add-home", homeController.postHome);

exports.addHomeRoutes = addHomeRoutes;
