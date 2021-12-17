const express = require("express");
const router = express.Router();

const catchAll = require('../controllers/404')

router.get("/:catchAll", catchAll);

module.exports = router;