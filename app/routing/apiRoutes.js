var friends = require("../data/friends");

module.exports = function (app) {
  var compareArray = []
  //displays the JSON of all possible friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  console.log(friends);
  //Handles incoming survey results
  app.post("/api/friends", function (req, res) {
    //Pushes form entry from user to friends JSON
    friends.push(req.body);
    //Handles the comparison formula
    function loopThrough(A, B) {
      compareArray = [];
      for (var i = 0; i < friends.length; i++) {
        //Maps array values as integers
        friends[i].scores = friends[i].scores.map(Number);
        var newFriend = friends[friends.length - 1].scores.map(Number);
        //Subtrabacts values of two arrays by index number
        var a = newFriend;
        var b = friends[i].scores;
        var x = a.map(function (item, index) {
          return Math.abs(item - b[index]);

        });
        console.log(x);
        //adds the total of array (Product of the subtraction)
        var diff = x.reduce((a, b) => Math.abs(a + b), 0);
        console.log(diff)
        //Pushes to the blank compareArray
        compareArray.push(diff)

        console.log(compareArray);
      };

      //After it loops, splice last index (new entry)
      compareArray.splice(compareArray.length - 1, 1)
      console.log(compareArray);
      //Match is the lowest value/least amount of diff with the user's entry
      var match = compareArray.indexOf(Math.min.apply(Math, compareArray));

      console.log(Math.abs(match));
      //Sends the index of the matched friend
      res.send(friends[match]);
    };
    loopThrough();
  });

};