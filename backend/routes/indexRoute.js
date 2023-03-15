const express = require("Express");
const loginRoute = require("./loginRoute");
const registerRoute = require("./registerRoute");
const profileRoute = require("./profileRoute");

const indexRoute = express.Router();

indexRoute.use("/register", registerRoute);
indexRoute.get("/login", loginRoute);
indexRoute.get("/profile", profileRoute);

module.exports = indexRoute;
