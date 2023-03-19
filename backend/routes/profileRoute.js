const express = require("Express");
const profileRoute = express.Router();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

profileRoute.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

module.exports = profileRoute;
