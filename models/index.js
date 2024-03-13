const CONFIG = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const BookModel = require("./book");
const AuthorModel = require("./author");

const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USER,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Add our Models
db.books = require("./book")(sequelize, DataTypes);
db.authors = require("./author")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables sync successfully.");
  })
  .catch((err) => {
    console.error("Unable to sync the database:", err);
  });

module.exports = db;
