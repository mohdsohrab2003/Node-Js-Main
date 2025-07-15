// Core Module
const express = require("express");

const addHomeRoutes = express.Router();
const hostController = require("../controller/hostController");

addHomeRoutes.get("/add-home", hostController.getAddHome);
addHomeRoutes.get("/host-home-list", hostController.getHostHome);

addHomeRoutes.post("/add-home", hostController.postHome);

exports.addHomeRoutes = addHomeRoutes;
