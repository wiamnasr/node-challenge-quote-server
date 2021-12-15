// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes/random", function (req, res) {
  res.send(JSON.stringify(pickFromArray(quotes)));
});

app.get("/quotes/search/:term", (req, res) => {
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
});

app.get("/quotes", function (request, response) {
  response.send(JSON.stringify(quotes));
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Setting to a port number, but adding process.env.PORT, when I deploy, the server will have the port number in an environment variable
// this way we check first for a port variable, if there is no port variable in the environment then it will directly run on port 5000
const PORT = process.env.PORT || 5000;

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
