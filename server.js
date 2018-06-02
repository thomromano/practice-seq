// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());



// Routes
// =============================================================

require("./routes/contact-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

const today = new Date();
// console.log(today);

const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}`;
const dateTime = `${date} ${time}`;
console.log(`This is today;s date: ${date}`);
console.log(`This is right now: ${dateTime}`);
