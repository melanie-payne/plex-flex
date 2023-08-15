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

// var loginRequestController = async (req, res) => {
//   var result = null;
//   try {
//     result = await requests_service.userRequestService(req.body);
//     if (result.status) {
//       res.send({ status: true, message: result.message });
//     }
//   } catch (error) {
//     console.log(error);
//     res.send({ status: false, message: error.message });
//   }
// };

module.exports = { saveRequestController };
