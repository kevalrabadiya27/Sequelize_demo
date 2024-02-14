const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const User = require("./src/model/user");
const userCont = require("./src/controllers/postUser");
const getUser= require("./src/controllers/getUser")
app.use(express.json())

app.post('/add',userCont);
app.get('/users',getUser)

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}..`);
});

//create table  force,alter(only change in table)
User.sync({ force: false });//every time new table
