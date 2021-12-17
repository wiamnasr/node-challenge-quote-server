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
  res.status(200).send(JSON.stringify(pickFromArray(quotes)));
};

const getSearchTerm = (req, res) => {
  const found = quotes.some((quoteObj) =>
    quoteObj["quote"].includes(req.params.term)
  );

  if (found) {
    // used parseInt as req.params.id returns a string and I am using strict equality
    res.json(
      quotes.filter((quoteObj) => quoteObj["quote"].includes(req.params.term))
    );
  } else {
    //   returning 400 bad request and a message when the user enters a non existing id
    res
      .status(400)
      .json({ msg: `No quotes include your search term "${req.params.term}"` });
  }
};

const getAllQuotes = (req, res) => {
  response.send(JSON.stringify(quotes));
};

module.exports = { getRandomQuote, getSearchTerm, getAllQuotes };
