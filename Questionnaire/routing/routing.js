module.exports = function(express, app){

app.use(express.static("/public"));

//////////////////////////////////
////                          ////
////    QUESTION TEMPLATES    ////
////                          ////
//////////////////////////////////
    
    //Homepage
    app.get("/", function(request, response) {
        response.render("index.ejs");
    });
    
    //Question 01
    app.get("/q01", function(req, res){
        res.render("questions/q01.ejs");
    });
    
    //Question 02    
    app.get("/q02", function(req, res){
        res.render("questions/q02.ejs");
    });
    
    //Question 03    
    app.get("/q03", function(req, res){
        res.render("questions/q03.ejs");
    });
    
    //Question 04    
    app.get("/q04", function(req, res){
        res.render("questions/q04.ejs");
    });
    
    //Question 05    
    app.get("/q05", function(req, res){
        res.render("questions/q05.ejs");
    });

////////////////////////////////////////
////                                ////
////    GDPR AND DATA PROTECTION    ////
////                                ////
////////////////////////////////////////

    //Tip 1
    app.get("/tip01", function(req, res){
        res.render("tips/tip01.ejs");
    });
    
    //Tip 2
    app.get("/tip02", function(req, res){
        res.render("tips/tip02.ejs");
    });
    
    //Tip 3
    app.get("/tip03", function(req, res){
        res.render("tips/tip03.ejs");
    });    

    //Tip 4
    app.get("/tip04", function(req, res){
        res.render("tips/tip04.ejs");
    });    
    
    //Tip 5
    app.get("/tip05", function(req, res){
        res.render("tips/tip05.ejs");
    });

    //Tip 6
    app.get("/tip06", function(req, res){
        res.render("tips/tip06.ejs");
    });
    
}