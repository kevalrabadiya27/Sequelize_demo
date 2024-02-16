const Sequelize = require("sequelize");
const dotenv = require("dotenv").config();

const sequelizeCon = new Sequelize(
  "ORG",
  process.env.DB_USERNAME,
  process.env.DB_PASS,
  {
    host: "localhost",
    logging: false, //not print query executing in console
    dialect: "mysql",
  }
);

try {
  sequelizeCon.authenticate();
  console.log("connection sucessfully");
} catch (error) {
  console.log("error to db connection" + error);
}
// second method to sync all table not one by one
// sequelize.sync({force:true})
module.exports = sequelizeCon;
