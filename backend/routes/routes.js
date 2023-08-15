var express = require("express");
var userController = require("../src/user-controller");
var request_controller = require("../src/requests/requests-controller");
const router = express.Router();

router.route("/users/save").post(userController.saveUserInfoController);
router.route("/users/login").post(userController.loginUserInfoController);

router.route("/request-form").post(request_controller.saveRequestController);

module.exports = router;
