var friends = require("../data/friends");


module.exports = function (app) {
  app.get("/api/friends", function(req, res){
    res.json(friends);
  });
  console.log(friends);

  app.post("/api/friends", function(req, res){
    friends.push(req.body);
    for(var i = 0; i < friends.length; i++){
      friends[i].scores = friends[i].scores.map(Number);
      console.log(friends[i].scores);
    } 
  });
};