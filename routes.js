const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.post("/users", userController.addUser);

router.get("/users/:id", userController.findUser);

router.post("/login", userController.getUser);

module.exports = router;
