const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.post("/users", userController.addUser);
router.post("/login", userController.getUser);

module.exports = router;
