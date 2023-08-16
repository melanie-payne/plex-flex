var requestModel = require("./requests-model");

module.exports.saveRequestService = async (requestDetails) => {
  try {
    var requestModelData = new requestModel();
    requestModelData.user = requestDetails.user;
    requestModelData.movie = requestDetails.movie;

    // Use await to wait for the save operation to complete
    await requestModelData.save();

    return true; // Return a resolved promise if save was successful
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it
  }
};
