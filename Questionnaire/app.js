var express = require("express");
var bodyParser = require("body-parser");

var port = 8082;

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

//Get/Post Request Routing
app.use(express.static("public"));
app.set("view engine", "html");
app.engine('html', require('ejs').renderFile);


    
    //Homepage
    app.get("/", function(request, response) {
        response.render("index.html");
    });
    
    //Question 01
    app.get("/q01", function(req, res){
        res.render("q01.html");
    });
    
    //Question 02    
    app.get("/q02", function(req, res){
        res.render("q02.html");
    });
    
    //Question 03    
    app.get("/q03", function(req, res){
        res.render("q03.html");
    });
    
    //Question 04    
    app.get("/q04", function(req, res){
        res.render("q04.html");
    });
    
    //Question 05    
    app.get("/q05", function(req, res){
        res.render("q05.html");
    });

////////////////////////////////////////
////    GDPR AND DATA PROTECTION    ////
////////////////////////////////////////

    //Tip 1
    app.get("/tip01", function(req, res){
        res.render("tip01.html");
    });
    
    //Tip 2
    app.get("/tip02", function(req, res){
        res.render("tip02.html");
    });
    
    //Tip 3
    app.get("/tip03", function(req, res){
        res.render("tip03.html");
    });    

    //Tip 4
    app.get("/tip04", function(req, res){
        res.render("tip04.html");
    });    
    
    //Tip 5
    app.get("/tip05", function(req, res){
        res.render("tip05.html");
    });

    //Tip 6
    app.get("/tip06", function(req, res){
        res.render("tip06.html");
    });

app.listen(port);
console.log("The port number is " + port);