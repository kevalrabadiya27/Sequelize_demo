const { where ,Op} = require("sequelize");
const UserSchema = require("../model/user");

const getUser = async (req, res) => {
  const findall = await UserSchema.findAll({
    where:{
      id:{
        [Op.eq]:2
      }
    },
    attributes:{exclude:['lastName']}});
  res.json(findall);
};

module.exports = getUser;
