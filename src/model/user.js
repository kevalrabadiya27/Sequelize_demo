const { DataTypes } = require("sequelize");
// dbconn file import
const sequelizeCon = require("../config/dbconn");

// schema
const User = sequelizeCon.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"mmdnfjf",
      //getter
      get() {
        const rawValue = this.getDataValue("firstName");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    lastName: {
      type: DataTypes.STRING,
      // set(value) {
      //   this.setDataValue("lastname:", value + ",-indian");
      // },
    },
    //virtual
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error("do not try merge");
      },
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
