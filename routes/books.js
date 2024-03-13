const express = require("express");
const bookController = require("../controller/bookController");

const BookRouter = express.Router();

BookRouter.get("/", bookController.getAllBooks);
BookRouter.post("/", bookController.addBook);
BookRouter.put("/:id", bookController.updateBookById);
BookRouter.delete("/:id", bookController.deleteBookById);

module.exports = BookRouter;
