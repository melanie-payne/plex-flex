var requests_service = require("./requests-service");

var saveRequestController = async (req, res) => {
  try {
    var status = await requests_service.saveRequestService(req.body);

    if (status) {
      res.send({ status: true, message: "request stored successfully :)" });
    } else {
      res.send({ status: false, message: "error saving request :(" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveRequestController };
