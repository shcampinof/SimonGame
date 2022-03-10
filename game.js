buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern =[];


$(document).ready(function() {
  $(".btn").click(function(e) {
    var wichBtn = $(this).attr("id");
    userClickedPattern.push(wichBtn);
    makeSound(wichBtn);
    $("."+wichBtn).addClass("pressed");
    setTimeout(function(){
      $("."+wichBtn).removeClass("pressed");
    }, 200);
    // if (wichBtn === "green") {
    //   alert("a");
    // } else if (wichBtn === "red") {
    //   alert("b");
    // } else if (wichBtn === "yellow") {
    //   alert("c");
    // } else if (wichBtn === "blue") {
    //   alert("a");
    // }
  });
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $(document).ready(() => {
    setInterval(() => {
      $("#" + randomChosenColour).fadeIn();
      $("#" + randomChosenColour).fadeOut();
    }, 500);
  });

  makeSound(randomChosenColour);
}


function makeSound(color) {

  switch (color) {

    case "red":
      var redSound = new Audio('sounds/red.mp3');
      redSound.play();
      break;

    case "blue":
      var blueSound = new Audio('sounds/blue.mp3');
      blueSound.play();
      break;

    case "green":
      var greenSound = new Audio('sounds/green.mp3');
      greenSound.play();
      break;

    case "yellow":
      var yellowSound = new Audio('sounds/yellow.mp3');
      yellowSound.play();
      break;

    default:
      console.log(color);
  }
}
