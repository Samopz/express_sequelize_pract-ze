module.exports = (sequelize, DataTypes) => {
  // Create the Author model
  const Author = sequelize.define(
    "Author",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "authors",
    }
  ); // Return the Author model

  return Author;
};
