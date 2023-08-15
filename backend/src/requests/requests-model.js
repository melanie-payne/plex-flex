var mongoose = require("mongoose");
var Schema = mongoose.Schema; // what is this line for

var requestSchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    movie: { type: String, required: true },
  },
  { collection: "requests" }
);

module.exports = mongoose.model("request", requestSchema);
