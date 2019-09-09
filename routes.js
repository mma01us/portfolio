// /routes.js

const bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res){ //Index page requested
        res.render("../src/views/index.ejs"); //Show index page to user
    });

    app.get("/projects/:project", function(req, res){
        console.log(req.params["project"]);
        switch(req.params["project"]){
            case '1': //creative challenge
                res.render("../src/views/creativechallenge.ejs");
                break;
            default:
                res.status(404).send("The requested page could not be found. If you think this is a mistake, contact me at michael.ma@nyu.edu");
        }
    });

    app.get("/about", function(req, res){ //About page requested
        res.render("../src/views/about.ejs"); //Show about page to user
    });

    app.get("/contact", function(req, res){ //Contact page requested
        res.render("../src/views/contact.ejs"); //Show contact page to user
    });

    app.use(function (req, res, next) {
        res.status(404).send("The requested page could not be found. If you think this is a mistake, contact me at michael.ma@nyu.edu");
    })
};