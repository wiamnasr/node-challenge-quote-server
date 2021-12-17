// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

// routes
const quotesRoutes = require("./routes/quotes");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Wiam's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.use("/quotes", quotesRoutes);

//...END OF YOUR CODE

// Setting to a port number, but adding process.env.PORT, when I deploy, the server will have the port number in an environment variable
// this way we check first for a port variable, if there is no port variable in the environment then it will directly run on port 5000
const PORT = process.env.PORT || 5000;

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
