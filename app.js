const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/connection.js");

const router = require("./routers/users");

// const User = require("./models/users");

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("<h1>server is online</h1>");
});

app.listen(port, () => {
  console.log;
});
