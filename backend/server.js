import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("SERVIDOR DE PRUEBA");
});

app.listen(3000, "localhost", () => {
  console.log("Server running on port 3000");
});
