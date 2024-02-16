const { DataTypes } = require("sequelize");
const sequelizeCon = require("../config/dbconn");
const User = require("./user");

const AdressSchema = sequelizeCon.define("adress", {
  current: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

AdressSchema.hasOne(User);
User.belongsTo(AdressSchema)

module.exports = AdressSchema;
