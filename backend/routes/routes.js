var express = require("express");
var userConroller = require("../src/user-controller");
const router = express.Router();

router.route("/users/save").post(userConroller.saveUserInfoController);

module.exports = router;
