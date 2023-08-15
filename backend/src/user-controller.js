var userService = require("./user-service");

var saveUserInfoController = async (req, res) => {
  try {
    var status = await userService.saveUserInfoService(req.body);

    if (status) {
      res.send({ status: true, message: "user info stored successfully :)" });
    } else {
      res.send({ status: false, message: "error saving user info :(" });
    }
  } catch (error) {
    console.log(error);
  }
};

var loginUserInfoController = async (req, res) => {
  var result = null;
  try {
    result = await userService.userLoginService(req.body);
    if (result.status) {
      res.send({ status: true, message: result.message });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.message });
  }
};

module.exports = { saveUserInfoController, loginUserInfoController };
