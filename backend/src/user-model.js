var mongoose = require("mongoose");
var Schema = mongoose.Schema; //what is this line for

var userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

module.exports = mongoose.model("user", userSchema);
