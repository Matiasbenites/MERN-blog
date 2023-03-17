const express = require("Express");
const logoutRoute = express.Router();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

logoutRoute.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

module.exports = logoutRoute;
