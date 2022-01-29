const express = require("express");
const hackers = require("./data/hackers.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("The API is running.");
});

app.get("/api/hackers", (req, res) => {
  res.json(hackers);
});

app.get("/api/hackers/:id", (req, res) => {
  const hacker = hackers.find((hacker) => hacker._id === req.params.id);

  res.send(hacker);
});

const PORT = process.env.PORT || 3069;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
