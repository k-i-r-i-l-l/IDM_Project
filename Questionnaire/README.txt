////////////////
//// README ////
////////////////

FILE STRUCTURE
    //.idea
    //node_modules
    public                  (DIRECTORY)
        index.html
        script.js
        style.css
    routing                 (DIRECTORY)
        routing.js
    templates               (DIRECTORY)
        questions           (DIRECTORY)
            question01.ejs
            question02.ejs
            question03.ejs
            question04.ejs
            question05.ejs
        tips                (DIRECTORY)
            tip01.ejs
            tip02.ejs
            tip03.ejs
            tip04.ejs
            tip05.ejs
            
        index.ejs
        
NOTES
    routing.js handles all get/post requests
        it's cleaner than placing it in the app.js directly