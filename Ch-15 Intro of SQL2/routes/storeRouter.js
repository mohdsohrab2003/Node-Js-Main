// Core Module
const express = require("express");

const userRoutes = express.Router();

const storeController = require("../controller/storeController");

userRoutes.get("/home-list", storeController.getHome);
userRoutes.get("/booking", storeController.getBooking);
userRoutes.get("/favourite-list", storeController.getFavouriteList);
userRoutes.post("/favourite-list", storeController.postAddToFavouriteList);
userRoutes.get("/", storeController.getIndex);
userRoutes.get("/home-list/:homeId", storeController.getHomeDetailPage);
userRoutes.post(
  "/favourite-list/delete/:homeId",
  storeController.deleteFavouriteHome
);

exports.userRoutes = userRoutes;
