var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(() => {
  if (started === false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  //capture the button pressed
  var wichBtn = $(this).attr("id");
  userClickedPattern.push(wichBtn);

  makeSound(wichBtn);
  animatePress(wichBtn);

  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
  userClickedPattern = [];
  //increase level
  level++;
  $("#level-title").text("Level " + (level));
  //random-color
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  //animation
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColour);
}

function makeSound(color) {
  //reproduce a sound
  var sound = new Audio('sounds/' + color + '.mp3');
  sound.play();
}

function animatePress(currentColor) {
  //press-animation
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 150);
}

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {

    makeSound("wrong");
    $("body").addClass("game-over");

    setTimeout(()=>{
      $("body").removeClass("game-over");
    },220);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver()
  }
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
