// 1. import libraries
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var routes = require("./routes/routes");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

// 2. start server
app.listen(1313, function check(error) {
  if (error) {
    console.log("there is an error in server :(");
  } else {
    console.log("there is no error and server has started :)");
  }
});

// 3. connect to mongoDB
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://127.0.0.1:27017/group-project",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function checkMongoDBConnection(error) {
    if (error) {
      console.log("error in mongoDB connection :(");
    } else {
      console.log("connected to mongoDB :)");
    }
  }
);

app.use(express.json());
app.use(routes);
