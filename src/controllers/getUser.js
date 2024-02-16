const { Op, QueryTypes } = require("sequelize");
const UserSchema = require("../model/user");

const getUser = async (req, res) => {
  const findall = await UserSchema.findAll({
    order: [["id", "DESC"]],
    limit: 2,
    where: {
      id: {
        [Op.eq]: 1,
      },
    },
    attributes: { exclude: ["lastName"] },
  });
  res.json(findall);
};


// const { count, rows } = await Project.findAndCountAll({
//   where: {
//     title: {
//       [Op.like]: 'foo%'
//     }
//   },
// });
//res.json({data:rows,count:count});

module.exports =  getUser;

// // Number comparisons
// [Op.gt]: 6,                              // > 6
// [Op.gte]: 6,                             // >= 6
// [Op.lt]: 10,                             // < 10
// [Op.lte]: 10,                            // <= 10
// [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
// [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

// Other operators

//  [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

//  [Op.in]: [1, 2],                         // IN [1, 2]
//  [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

//  [Op.like]: '%hat',                       // LIKE '%hat'
//  [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
//  [Op.startsWith]: 'hat',                  // LIKE 'hat%'
//  [Op.endsWith]: 'hat',                    // LIKE '%hat'
//  [Op.substring]: 'hat',                   // LIKE '%hat%'
//  [Op.iLike]: '%hat',                      // ILIKE '%hat' (case insensitive) (PG only)
//  [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (PG only)
//  [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
//  [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
//  [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (PG only)
//  [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (PG only)

//  [Op.any]: [2, 3],                        // ANY (ARRAY[2, 3]::INTEGER[]) (PG only)
//  [Op.match]: Sequelize.fn('to_tsquery', 'fat & rat') // match text search for strings 'fat' and 'rat' (PG only)

//  // In Postgres, Op.like/Op.iLike/Op.notLike can be combined to Op.any:
//  [Op.like]: { [Op.any]: ['cat', 'hat'] }
