/** @format */

const express = require("express");
const linkPreview = require("../Controllers/previewerController");
const router = express.Router();
const linkPreviewer = require("./linkPreviewer");

router.use("/", linkPreview);

module.exports = router;
