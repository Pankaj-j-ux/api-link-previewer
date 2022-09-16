/** @format */

const express = require("express");
require("dotenv").config();

const cors = require("cors");
const morgan = require("morgan");
const previewRouter = require("./Routes/index");

// EXPRESS APP INITIALIZED
const app = express();

// BUILT IN MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// ROUTES MIDDLEWARE
app.use("/api/v1", previewRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT $${process.env.PORT}`);
});
