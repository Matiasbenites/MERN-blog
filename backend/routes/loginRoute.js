const express = require("Express");
const userModel = require("../models/userModel");
const loginRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const secret = "asfdagagskhjkjriee";

loginRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await userModel.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({ id: userDoc._id, username });
    });
  } else {
    res.status(400).json("Wrong credentials");
  }
});

module.exports = loginRoute;
