const express = require("express");
const RecipesController = require("./controller/Recipes.controller");
const { createDbConnection } = require("./db");

// CREATE DB CONNECTION
createDbConnection();

//environment variable config
require("dotenv").config();

// server create
const API_SERVER = express();

// PARSING INCOMING REQUEST BODY AS JSON
API_SERVER.use(express.json());

//inject router
API_SERVER.use("/recipe", RecipesController);

//server listen
API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log("Server start");
});
