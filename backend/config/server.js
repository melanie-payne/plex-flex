// 1. import libraries
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var routes = require("../routes/routes");
const cors = require("cors");

// fix this part
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

// 2. start server
app.listen(4000, function check(error) {
  if (error) {
    console.log("there is an error in server :(");
  } else {
    console.log("there is no error and server has started :)");
  }
});

// fix which database this is supposed to connect to

// 3. connect to mongoDB
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/group-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb :)");
  })
  .catch((error) => {
    console.log("error connecting to mongodb :(", error);
  });

app.use(express.json());
app.use(routes);
