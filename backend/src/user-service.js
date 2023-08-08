var userModel = require("./user-model");
var key = "mystudentsaretalented"; //edit this
var encryptor = require("simple-encryptor")(key);

module.exports.saveUserInfoService = (userDetails) => {
  return new Promise(function saveUserInfoFun(resolve, reject) {
    var userModelData = new userModel();
    userModelData.username = userDetails.username;
    userModelData.email = userDetails.email;

    // encrypt password
    var encryptPassword = encryptor.encrypt(userDetails.password);
    userModelData = encryptPassword;

    userModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(true);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.userLoginService = (userLoginDetails) => {
  return new Promise(function userLoginFunctionality(resolve, reject) {
    userModel.findOne(
      { email: userLoginDetails.email },
      function getLoginResult(error, result) {
        if (error) {
          reject({ staus: false, message: "invalid data" });
        } else {
          if (result != undefined && result != null) {
            var decryptedPassword = encryptor.decrypt(result.password);
            if (decryptedPassword == userLoginDetails.password) {
              resolve({ status: true, message: "user validated successfully" });
            } else {
              reject({ status: false, message: "user validated failed" });
            }
          } else {
            reject({ status: false, message: "error in user information" });
          }
        }
      }
    );
  });
};
