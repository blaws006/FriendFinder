var friends = require("../data/friends");

//displays the JSON of all possible friends
  //Handles incoming survey results
  //Pushes form entry from user to friends JSON
//Handles the comparison formula
//Maps array values as integers
 //Subtrabacts values of two arrays by index number
 //adds the total of array Product of the subtraction
//adds the total of array Product of the subtraction
//Pushes to the blank compareArray
//After it loops, splice last index (new entry)
//Match is the lowest value/least amount of diff with the user's entry
//Sends the index of the matched friend
module.exports = function (app) {
  var compareArray = []
  
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  console.log(friends);

  app.post("/api/friends", function (req, res) {
  
    friends.push(req.body);
  
    function loopThrough(A, B) {
      compareArray = [];
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

      compareArray.splice(compareArray.length - 1, 1);
      console.log(compareArray);

      var match = compareArray.indexOf(Math.min.apply(Math, compareArray));

      console.log(Math.abs(match));

      res.send(friends[match]);
    };
    loopThrough();
  });

};