const AdressSchema = require("../model/adress");
const UserSchema = require("../model/user");

const addAddress = async (req, res) => {
  const nameadd = AdressSchema.build(req.body);
  await nameadd.save();
  if (nameadd && nameadd.id) {
    await UserSchema.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      adressId: nameadd.id,
    });
  }
  res.json(nameadd);
};

const Getdata = async (req, res) => {
  const rep = await UserSchema.findAll({
    attributes: ["firstName", "lastName"],
    include: [{ model: AdressSchema }],
  });
  res.json(rep);
};

module.exports = { addAddress,Getdata };
// export default {addAddress,Getdata}
