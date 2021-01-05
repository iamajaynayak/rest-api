const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/users", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Failed to connect"));
