// Core Module
const express = require("express");

const userRoutes = express.Router();

const storeController = require("../controller/storeController");

userRoutes.get("/home-list", storeController.getHome);
userRoutes.get("/booking", storeController.getBooking);
userRoutes.get("/favourite-list", storeController.getFavouriteList);
userRoutes.get("/", storeController.getIndex);

exports.userRoutes = userRoutes;
