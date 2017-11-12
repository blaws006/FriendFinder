$("#submit").on("click", function (event) {
  //Makes sure that all questions are answered
  function formValidation() {
    var isValid = true;
    $(".input").each(function () {
      if ($(this).val() === "")
        isValid = false;
    });
    $(".choice").each(function () {
      if ($(this).val() === "")
        isValid = false;
    });
    return isValid;
  }
  //If form has been filled out
  if (formValidation() == true) {
    var currentURL = window.location.origin;
    //Take values of the form
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]

    }
    console.log(newFriend);
    //Loads data from the server
    $.post(currentURL + "/api/friends", newFriend, function (data) {
      //Pushes data to the modal 
      $(".matchName").text(data.name);
      $('.matchImg').attr("src", data.photo); // Show the modal with the best match 
      $("#resultsModal").addClass("is-active");

    });
  } else { //If form isn't fully filled out, it alerts the user that they need to
    alert("Please fill out form!");
  }
});
//Toggles the modal on and off
$(".toggleOff").on("click", function () {
  $("#resultsModal").removeClass("is-active")
});