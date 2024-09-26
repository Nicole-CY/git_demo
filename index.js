const express = require("express");

const app = express();

app.length("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("Listening at port 8080.");
});
