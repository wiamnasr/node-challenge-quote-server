const getHomePage = (req, res) => {
  
  res.status(200).json({
    success: true,
    msg: "Wiam's Quote Server!  Ask me for /quotes/random, or /quotesCheckout the methods",
    methods: {
      home: "/",
      quotes: "/quotes",
      random: "/quotes/random",
      search: "/quotes/search/:searchTerm",
    },
  });
};

module.exports = { getHomePage };
