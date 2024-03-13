const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/authors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json()); // parse requests of content-type - application/json

// Add routes
app.use("/books", bookRouter); 

app.get("/", (req, res) => {
  res.send("Welcome to the book API");
});

app.use((err, req, res, next) => { 
  console.log(err);
  res.status(500).json({
    error: err.message,
  });
});

app.use("/authors", authorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the author API");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
