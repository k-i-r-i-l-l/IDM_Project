var express = require("express");
var bodyParser = require("body-parser");

var port = 8082;

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "templates");


// login post route handles logging in and then redirects users back to home
app.post("/login", function(request, response) {
    // check the credentials
    var firstname = request.body.name;
    /* TO DO: the firstname into an object then write it to json file */
    response.redirect("login.html");
});