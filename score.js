// Iteration 8: Making scoreboard functional
var scoreBoard = document.getElementById("score-board");
var score = localStorage.getItem('score');
scoreBoard.textContent = score;


play_again_button=document.getElementById("play-again-button");
play_again_button.addEventListener("click", function()
{
  window.location.href = "game.html";
});
