const connectToMongo = require("./db");
const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");

// dotenv.config();

const mongoURI = "mongodb://127.0.0.1:27017";
connectToMongo(mongoURI);

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});
app.use("/api/auth", require("./routes/Auth.js"));
app.use("/api/user", require("./routes/Users.js"));
app.use("/api/quiz", require("./routes/Exercise.js"));
app.use("/api/languages", require("./routes/Languages"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
