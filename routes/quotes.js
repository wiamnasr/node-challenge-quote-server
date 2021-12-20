const express = require("express");
const router = express.Router();

const {
  getRandomQuote,
  getSearchTerm,
  getAllQuotes,
} = require("../controllers/quotes");

router.get("/random", getRandomQuote);

router.get("/search/:term", getSearchTerm);
// router.get("/:catchAll", catchAll);

router.get("/", getAllQuotes);

module.exports = router;
