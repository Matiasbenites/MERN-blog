const express = require("Express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexRoute = require("./routes/indexRoute.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/", indexRoute);

mongoose
  .connect(
    "mongodb+srv://blog:v440kAezADLLThC1@cluster0.d3hin0y.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(4000, "localhost", () => {
  console.log("Servidor funcionando correctamente en puerto 4000  💫💫💫");
});
