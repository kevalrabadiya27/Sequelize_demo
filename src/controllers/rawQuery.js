const { Op, QueryTypes } = require("sequelize");
const UserSchema = require("../model/user");
const sequelizeCon = require("../config/dbconn");

const rawQuery = async (req, res) => {
  const users = await sequelizeCon.query("select * from `users` ", {
    // logging: console.log
    mapToModel: true, // pass true here if you have any mapped fields
  });
  res.status(200).json(users);
};

// replacement

// await sequelize.query(
//   'SELECT * FROM `users` WHERE status = ?',
//   {
//     replacements: ['active'],
//     type: QueryTypes.SELECT
//   }
// );
//  or [both same]
// await sequelize.query(
//   'SELECT * FROM `users` WHERE status = :status',
//   {
//     replacements: { status: 'active' },
//     type: QueryTypes.SELECT
//   }
// );

// To use the wildcard operator %, append it to your replacement. The following query matches users with names that start with 'ben'.
// await sequelize.query(
//   'SELECT * FROM users WHERE name LIKE :search_name',
//   {
//     replacements: { search_name: 'ben%' },
//     type: QueryTypes.SELECT
//   }
// );

module.exports = rawQuery;
