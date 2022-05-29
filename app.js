// Event Listener for DOMContentLoaded with a console.log to check if the DOM is loaded and ready; all of the remaining code is written inside this function. //

document.addEventListener("DOMContendLoaded", function () {
  //////////// Rock, Paper, Scissors game rules ////////////
  // Two players are needed to play the game; in this case the user plays against the computer.
  // The user can choose one out of three possible options (Rock || Paper || Scissors).
  // The computer chooses one option at random as a response.
  // Rock beats Scissors. Paper beats Rock. Scissors beats Paper. If both the user's and the computer's choices are the same, we have a draw.
  //////////// Logic of how the game functions in Javascript ////////////
  // User clicks on one image out of three possible ones (Rock || Paper || Scissors). This represents the player's choice.
  // By using the Math.floor(Math.random() * 3) function, we can have three possible number value returns: 0,1,2 at random. These number values represent the computer's choices.
  // If the returned number is 0, the "computer's choice" is Rock.
  // If the returned number is 1, the "computer's choice" is Paper.
  // If the returned number is 2, the "computer's choice" is Scissors.
  // Then the users's choice is compared to the computer's choice.
  // We have the following possible outcomes:
  // 1. User chooses Rock //
  // If User chooses Rock and the returned number is 0, we have a draw.
  // If User chooses Rock and the returned number is 1, the computer wins.
  // If User chooses Rock and the returned number is 2, the user wins.
  // 2. User chooses Paper //
  // If User chooses Paper and the returned number is 0, the user wins.
  // If User chooses Paper and the returned number is 1, we have a draw.
  // If User chooses Paper and the returned number is 2, the computer wins.
  // 3. User chooses Scissors //
  // If User chooses Scissors and the returned number is 0, the computer wins.
  // If User chooses Scissors and the returned number is 1, the user wins.
  // If User chooses Scissors and the returned number is 2, we have a draw.
});
