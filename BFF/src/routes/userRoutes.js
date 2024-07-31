const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/login", userController.userLogin);
router.post("/register", userController.userRegister);
router.post("/logout", userController.userLogout);
router.post("/refreshToken", userController.userRefreshToken);

module.exports = router;
