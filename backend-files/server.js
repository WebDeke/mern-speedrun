const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("The API is running.");
});

app.listen(3069, console.log("Server is running on port 3069"));
