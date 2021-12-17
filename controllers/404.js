const get404 = (req, res) => {
  console.log(req.catchAll);
  res.status(400).json({
    success: false,
    msg: `>>>>  ${req.catchAll}  <<<< is not within my API s reach...`,
    methods: {
      home: "/",
      quotes: "/quotes",
      random: "/quotes/random",
      search: "/quotes/search/:searchTerm",
    },
  });
};

module.exports = get404;
