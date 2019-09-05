// /routes.js

const bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res){ //Index page requested
        res.render("../src/views/index.ejs"); //Show index page to user
    });

    app.get("/about", function(req, res){ //About page requested
        res.render("../src/views/about.ejs"); //Show about page to user
    });

    app.get("/contact", function(req, res){ //Contact page requested
        res.render("../src/views/contact.ejs"); //Show contact page to user
    });
};