const db = require("../models");
const AuthorModel = db.authors;

// Add a new author
async function addAuthor(req, res) {
    const authorInfo = req.body;
    try {
        const author = await AuthorModel.create(authorInfo);
        res.status(200).json({
            message: "Author added successfully",
            data: author,
        });
    } catch (error) {
        console.error("Error adding book", error);
        res.status(500).send(error);
    }
}

    async function getAllAuthors(req, res) {
      try {
        const authors = await AuthorModel.findAll();
        res.status(200).json(authors);
      } catch (error) {
        console.error("Error getting all authors", error);
        res.status(500).send(error);
      }
}

async function updateAuthorById(req, res) {
  const authorId = req.params.id;
  const authorUpdateInfo = req.body;
  try {
    const author = await AuthorModel.update(authorUpdateInfo, {
      where: {
        id: authorId,
      },
    });
    res.status(200).json({
      message: "Author updated successfully",
      data: author,
    });
  } catch (error) {
    console.error("Error updating author", error);
    res.status(500).send(error);
  }
}

async function deleteAuthorById(req, res) {
  const authorId = req.params.id;
  try {
    const author = await AuthorModel.destroy({
      where: {
        id: authorId,
      },
    });
    res.status(200).json({
      message: "Author deleted successfully",
      data: author,
    });
  } catch (error) {
    console.error("Error deleting author", error);
    res.status(500).send(error);
  }
}

module.exports = {
  addAuthor,
  getAllAuthors,
  updateAuthorById,
  deleteAuthorById,
};
