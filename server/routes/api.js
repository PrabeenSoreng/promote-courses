const express = require("express");
const router = express.Router;

const ApiCtrl = require("../controllers/api.js");

router.get("", ApiCtrl.getPageData);

module.exports = router;
