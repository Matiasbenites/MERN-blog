import express from "express";

const registerRoute = express.Router();

registerRoute.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

export default registerRoute;
