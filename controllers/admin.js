const getHomePage = (req, res) => {
  res
    .status(200)
    .send("Wiam's Quote Server!  Ask me for /quotes/random, or /quotes");
};

module.exports = { getHomePage };
