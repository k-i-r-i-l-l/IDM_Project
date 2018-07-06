////////////////
//// README ////
////////////////

FILE STRUCTURE
    //.idea
    //node_modules
    myStatic                  (DIRECTORY)
        ad                      (DIRECTORY)
            ads1.html
        test                    (DIRECTORY) 
            test1.html
        tips                    (DIRECTORY)
            tip1.html
        final.html // simulating the end page where the info gets deleted - WORKING
        index.html
        question-2.html  // working
        script.js
        style.css
    routing                 (DIRECTORY)
        routing.js
    templates //NO LONGER IN USE              (DIRECTORY)
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

        
NOTES
    routing.js handles all get/post requests
        it's cleaner than placing it in the app.js directly
