const { DataTypes } = require("sequelize");
// dbconn file import
const sequelize = require("../config/dbconn");

// schema
const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    // other options eg.table name,modelname
    tablename: "Person",
    // timestamps:false
    createdAt: false,
    updatedAt: true,
  }
);

//second method

// class User extends Model {}

// User.init({
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'User' // We need to choose the model name
// });

module.exports = User;
