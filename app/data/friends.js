var friendArray = [{
    name: "Thor",
    photo: "https://uproxx.files.wordpress.com/2017/04/thor-ragnarok-1_marvel.jpg?quality=100&w=650&h=373",
    scores: [
      5,
      2,
      5,
      1,
      2,
      2,
      1,
      5,
      1,
      5
    ],
  },
  {
    name: "Iron Man",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/1200px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
    scores: [
      5,
      4,
      3,
      5,
      2,
      5,
      5,
      4,
      3,
      1
    ]
  },
  {
    name: "Black Panther",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg/220px-Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg",
    scores: [
      4,
      3,
      3,
      2,
      1,
      3,
      2,
      5,
      5,
      1
    ]
  },
  {
    name: "Black Widow",
    photo: "https://www.gossipcop.com/wp-content/uploads/2017/08/Scarlett-Johansson-Red-Hair-Avengers.jpg",
    scores: [
      1,
      5,
      1,
      5,
      4,
      5,
      2,
      5,
      1,
      5
    ]
  },
  {
    name: "Hulk",
    photo: "https://cdn.flickeringmyth.com/wp-content/uploads/2017/07/avengers-age-ultron-hulk-mark-ruffalo-600x300.jpg",
    scores: [
      5,
      3,
      5,
      3,
      1,
      3,
      1,
      1,
      1,
      5
    ]
  },
  {
    name: "Captain America",
    photo: "https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all",
    scores: [
      1,
      1,
      5,
      1,
      1,
      3,
      1,
      1,
      1,
      5
    ]
  },
  {
    name: "Hawkeye",
    photo: "https://screenrant.com/wp-content/uploads/2017/08/Hawkeye-Civil-War-Costume-Promo-Art.jpg",
    scores: [
      5,
      5,
      5,
      1,
      4,
      1,
      3,
      2,
      4,
      5
    ]
  },
  {
    name: "Brandon Lawson",
    photo: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20604318_10102598153142407_3697514142070868015_n.jpg?oh=6de727d3e89a2348c19d40e925e28ce3&oe=5A9F2967",
    scores: [
      4,
      3,
      5,
      1,
      5,
      1,
      1,
      5,
      5,
    ]
  }
]

function setDifference(A, B) {
  var a = friendArray[0].scores;
  var b = friendArray[1].scores;
  var x = a.map(function (item, index) {
    return Math.abs(item - b[index]);


  })
  console.log(x);
  var diff = x.reduce((a, b) => Math.abs(a + b), 0);

  console.log(diff)
}

setDifference();
module.exports = friendArray;