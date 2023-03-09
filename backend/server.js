const express = require("Express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexRoute = require("./routes/indexRoute.js");

const app = express();

app.use(express.json());
app.use(cors());

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

//blog
//v440kAezADLLThC1
//mongodb+srv://blog:v440kAezADLLThC1@cluster0.d3hin0y.mongodb.net/?retryWrites=true&w=majority
//
