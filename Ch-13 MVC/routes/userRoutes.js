// Core Module
const express = require("express");

const userRoutes = express.Router();

const homeController = require("../controller/home");

userRoutes.get("/", homeController.getHome);

exports.userRoutes = userRoutes;
