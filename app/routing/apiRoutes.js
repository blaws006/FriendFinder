var friends = require("../data/friends");


module.exports = function (app) {
  var compareArray = []
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  console.log(friends);

  app.post("/api/friends", function (req, res) {
    friends.push(req.body);

    function loopThrough(A, B) {
     
      for (var i = 0; i < friends.length; i++) {

        friends[i].scores = friends[i].scores.map(Number);
        var newFriend = friends[friends.length - 1].scores.map(Number);
        var a = newFriend;
        var b = friends[i].scores;
        var x = a.map(function (item, index) {
          return Math.abs(item - b[index]);
       
        });
        console.log(x);
        var diff = x.reduce((a, b) => Math.abs(a + b), 0);
        console.log(diff)
        compareArray.push(diff)
       
        console.log(compareArray);
      };
      compareArray.splice(compareArray.length - 1, 1)
      console.log(compareArray);
    };
    loopThrough();
  });

};