const express = require("Express");
const userModel = require("../models/userModel");

const registerRoute = express.Router();

registerRoute.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userDoc = await userModel.create({
      username,
      email,
      password,
      // bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

module.exports = registerRoute;
