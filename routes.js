// /routes.js

const bodyParser = require("body-parser");
var path = require("path");
var mobile = require('is-mobile');

if(mobile())
    console.log("Mobile User");
else
    console.log("Non-mobile User");

module.exports = function(app) {
    app.get("/", function(req, res){ //Index page requested
        if(mobile())
            res.render("../src/views/mindex.ejs"); //mobile version
        else
            res.render("../src/views/index.ejs"); //Show index page to user
    });

    app.get("/about", function(req, res){ //About page requested
        if(mobile())
            res.render("../src/views/mabout.ejs"); //mobile version
        else
            res.render("../src/views/about.ejs"); //Show about page to user
    });

    app.get("/contact", function(req, res){ //Contact page requested
        if(mobile())
            res.render("../src/views/mcontact.ejs"); //mobile version
        else
            res.render("../src/views/contact.ejs"); //Show contact page to user
    });    
};