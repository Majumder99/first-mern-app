// MENR = Mongo + Express + React + Node

//Development = Node.js server + react server

//Production = node.js server + static react files

//MEN

//E-express
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 8000;

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
