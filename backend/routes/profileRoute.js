const express = require("Express");
const profileRoute = express.Router();

profileRoute.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

module.exports = profileRoute;
