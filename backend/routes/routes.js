var express = require("express");
var userController = require("../src/user-controller");
const router = express.Router();

router.route("/users/save").post(userController.saveUserInfoController);
router.route("/users/login").post(userController.loginUserInfoController);

module.exports = router;
