// Core Module
const express = require("express");

const hostRouter = express.Router();
const hostController = require("../controller/hostController");

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.get("/host-home-list", hostController.getHostHome);

hostRouter.post("/add-home", hostController.postHome);
hostRouter.get("/host/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/host/edit-home", hostController.postEditHome);
hostRouter.post("/host/delete-home:homeId", hostController.deleteHome);

exports.hostRouter = hostRouter;
