const express = require("express");
const authorController = require("../controller/authorController");
const AuthorRouter = express.Router();

AuthorRouter.get("/", authorController.getAllAuthors);

AuthorRouter.post("/", authorController.addAuthor);

AuthorRouter.put("/:id", authorController.updateAuthorById);

AuthorRouter.delete("/:id", authorController.deleteAuthorById);

module.exports = AuthorRouter;
