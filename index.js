/** @format */

const express = require("express");
require("dotenv").config();

const previewRouter = require("./Routes/linkPreviewer");

// EXPRESS APP INITIALIZED
const app = express();

// BUILT IN MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES MIDDLEWARE
app.use("/api/v1", previewRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT $${process.env.PORT}`);
});
