// server.js

// set up ======================================================================
// get all the tools we need
var express  = require("express");
var app      = express();
var port     = process.env.PORT || 8080;
var flash    = require("connect-flash");

var morgan       = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser   = require("body-parser");
var session      = require("express-session");

// set up our express application
app.use(morgan("dev")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.use(express.static('src'))

app.set("view engine", "ejs"); // set up ejs for templating

// routes ======================================================================
require("./routes.js")(app); // load our routes

// launch ======================================================================
app.listen(port);
console.log("Running on: " + port);