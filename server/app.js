const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const usersRoute = require("./routes/users-routes");
const questionRoute = require("./routes/question-routes");
const app = express();

app.use(bodyParser.json());

app.use("/api/users", usersRoute);

app.use("/api/question", questionRoute);

dotenv.config();
const PORT = process.env.PORT;

// app.post("/question", mongoPractice.createQuestion);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listen(`${PORT}`, () => console.log("연결됨")))
  .catch((err) => console.log(err));
