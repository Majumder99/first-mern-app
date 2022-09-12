// MENR = Mongo + Express + React + Node

//Development = Node.js server + react server

//Production = node.js server + static react files

//MEN

//E-express
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userSchema");

//This middleware allows us to connect the cross origin because the port is defferent in two server. Client side and server side.
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://root:root@cluster0.yizcs.mongodb.net/mern-stack")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(user);
  } catch (e) {
    res.json({ msg: e.message });
  }
});

app.post("/api/login", async (req, res) => {
  const result = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (result) {
    res.status(200).json({ user: result });
  } else {
    res.status(400).json({ msg: "Not found" });
  }
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
