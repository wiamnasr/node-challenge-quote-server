//load the quotes JSON
const quotes = require("../quotes.json");

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomQuote = (req, res) => {
  res.status(200).json({ success: true, randomQuote: pickFromArray(quotes) });
};

const getSearchTerm = (req, res) => {
  const found = quotes.some((quoteObj) =>
    quoteObj["quote"].includes(req.params.term)
  );

  if (!found) {
    //   returning 404 bad request and a message when the user enters a non existing id
    res.status(404).json({
      success: false,
      msg: `No quotes include your search term "${req.params.term}"`,
    });
  } else {
    res.json({
      success: true,
      matchingQuotes: quotes.filter((quoteObj) =>
        quoteObj["quote"].includes(req.params.term)
      ),
    });
  }
};

const getAllQuotes = (req, res) => {
  res.json({ success: true, quotes });
};// used parseInt as req.params.id returns a string and I am using strict equality

module.exports = { getRandomQuote, getSearchTerm, getAllQuotes };
