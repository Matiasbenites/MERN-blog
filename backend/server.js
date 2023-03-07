import express from "express";
import cors from "cors";
import registerRoute from "./routes/registerRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/register", registerRoute);
app.get("/", (req, res) => {
  res.send("Hello World! 💫💫");
});

app.listen(4000, "localhost", () => {
  console.log("Servidor funcionando correctamente en puerto 4000  💫💫💫");
});
