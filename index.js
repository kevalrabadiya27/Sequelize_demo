const express = require("express");
require("dotenv").config();
const app = express();

const User = require("./src/model/user");
const Address = require("./src/model/adress");
const { addAddress, Getdata } = require("./src/controllers/assoicition");
const userCont = require("./src/controllers/postUser");
const getUser = require("./src/controllers/getUser");
const rawQuery = require("./src/controllers/rawQuery");

app.use(express.json());

// app.post("/add", userCont);
// app.get("/users", getUser);
// app.get("/rowq", rawQuery);
app.post("/onetoone", addAddress);
app.get("/getmany", Getdata);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}..`);
});

//create table  force,alter(only change in table)
User.sync({ force: false }); //every time new table
Address.sync({ force: false });
