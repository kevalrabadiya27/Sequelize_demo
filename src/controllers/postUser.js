const UserSchema = require("../model/user");

const adduser = async (req, res) => {
  const nameadd = UserSchema.build(req.body);
  //second method - (not need to save())
  // const nameadd = UserSchema.create({ data: 1 }); or bulkcreate(many array insert)
  await nameadd.save();
  res.json(nameadd);
};




//reload

// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); // "Jane"
// jane.name = "Ada";
// // the name is still "Jane" in the database
// await jane.reload();
// console.log(jane.name); // "Jane"

// save some filed
// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); // "Jane"
// console.log(jane.favoriteColor); // "green"
// jane.name = "Jane II";
// jane.favoriteColor = "blue";
// await jane.save({ fields: ['name'] });
// console.log(jane.name); // "Jane II"
// console.log(jane.favoriteColor); // "blue"
// // The above printed blue because the local object has it set to blue, but
// // in the database it is still "green":
// await jane.reload();
// console.log(jane.name); // "Jane II"
// console.log(jane.favoriteColor); // "green"

module.exports = adduser;
