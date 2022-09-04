/** @format */

const express = require("express");
const linkPreview = require("../Controllers/previewerController");
const router = express.Router();

router.route("/").get(linkPreview);

module.exports = router;
