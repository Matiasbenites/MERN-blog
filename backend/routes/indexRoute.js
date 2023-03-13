const express = require("Express");
const loginRoute = require("./loginRoute");
const registerRoute = require("./registerRoute");

const indexRoute = express.Router();

indexRoute.use("/register", registerRoute);
indexRoute.get("/login", loginRoute);
// indexRoute.get("/home", homeRoute);

module.exports = indexRoute;
