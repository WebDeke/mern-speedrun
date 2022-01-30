import express from "express";
import { hackers, find } from "./data/hackers.js";
import { config } from "dotenv";
import connectDB from "./config/db.js";

const app = express();
config();
connectDB();

app.get("/", (req, res) => {
  res.send("The API is running.");
});

app.get("/api/hackers", (req, res) => {
  res.json(hackers);
});

app.get("/api/hackers/:id", (req, res) => {
  const hacker = find((hacker) => hacker._id === req.params.id);

  res.send(hacker);
});

const PORT = process.env.PORT || 3069;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
