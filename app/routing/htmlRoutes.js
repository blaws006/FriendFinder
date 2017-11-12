//Requiremnets///////////////////////////////////////////////
var path = require("path");

module.exports = function(app) {
    //Routes to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));     
    });

    //Routes to survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //Routes to home page in the event of something funky happening
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};