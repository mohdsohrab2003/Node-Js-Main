// Core Module
const express = require("express");

const authRouter = express.Router();
const authController = require("../controller/authController");

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.use("/", authController.PreventLogin);
authRouter.post("/logout", authController.getLogout);

exports.authRouter = authRouter;
