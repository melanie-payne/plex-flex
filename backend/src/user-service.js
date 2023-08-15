var userModel = require("./user-model");
var key = "mystudentsaretalented"; //edit this
var encryptor = require("simple-encryptor")(key);

module.exports.saveUserInfoService = async (userDetails) => {
  try {
    var userModelData = new userModel();
    userModelData.username = userDetails.username;
    userModelData.email = userDetails.email;

    // Encrypt password
    var encryptPassword = encryptor.encrypt(userDetails.password);
    userModelData.password = encryptPassword;

    // Use await to wait for the save operation to complete
    await userModelData.save();

    return true; // Return a resolved promise if save was successful
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it
  }
};

module.exports.userLoginService = async (userLoginDetails) => {
  try {
    var result = await userModel.findOne({ email: userLoginDetails.email });

    if (!result) {
      throw new Error("User not found");
    }

    var decryptedPassword = encryptor.decrypt(result.password);
    if (decryptedPassword === userLoginDetails.password) {
      return { status: true, message: "user validated successfully" };
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
