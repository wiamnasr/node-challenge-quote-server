const express = require("express");
const router = express.Router();

const catchAll = require('../controllers/404')

router.get("/*", catchAll);

module.exports = router;