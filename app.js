// Event Listener for DOMContentLoaded with a console.log to check if the DOM is loaded and ready; all of the remaining code is written inside this function. //

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready");

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

  /////////// 1. User chooses Rock ///////////
  // If User chooses Rock and the returned number is 0, we have a draw.
  // If User chooses Rock and the returned number is 1, the computer wins.
  // If User chooses Rock and the returned number is 2, the user wins.

  /////////// 2. User chooses Paper ///////////
  // If User chooses Paper and the returned number is 0, the user wins.
  // If User chooses Paper and the returned number is 1, we have a draw.
  // If User chooses Paper and the returned number is 2, the computer wins.

  /////////// 3. User chooses Scissors ///////////
  // If User chooses Scissors and the returned number is 0, the computer wins.
  // If User chooses Scissors and the returned number is 1, the user wins.
  // If User chooses Scissors and the returned number is 2, we have a draw.

  // The three possible outcomes are written in three separate "if else" statements.
  // Event Listeners and Set Timeout functions are added to elements for a visual feed-back.

  // Three variables initialised for the three counters which will keep track of the wins and draws.

  let playerWinCounter = 0;
  let computerWinCounter = 0;
  let drawCounter = 0;

  // Case 1. User clicks on the Rock image
  // On click, the question-mark icon representing the player's choice changes to the Rock image.

  document.getElementById("large-rock").addEventListener("click", function () {
    document.getElementById("player-question-mark").src = "rock.png";

    // Function to return either a 0, 1 or 2 as a number value.
    let compChoice = Math.floor(Math.random() * 3);

    // If computer's choice is Rock (0 as a number value)
    if (compChoice === 0) {
      // Increment drawCounter by 1
      drawCounter++;

      // The question-mark icon representing the Computer's choice changes to the Rock Image.
      document.getElementById("comp-question-mark").src = "rock.png";

      // Since we have a draw, the text in the paragraph containing the Draw counter changes to Draw + the drawCounter value.
      document.getElementById("draw-counter").innerText =
        "Draw: " + drawCounter;

      // Animation using CSS class win-animation-text (CSS line 205) to change the text color within the Draw counter paragraph to a darker blue then return to its former color after 1 second by removing the class.
      document
        .getElementById("draw-counter")
        .classList.add("win-animation-text");

      setTimeout(function () {
        document
          .getElementById("draw-counter")
          .classList.remove("win-animation-text");
      }, 1000);
    }
    // If computer's choice is Paper (1 as a number value)
    else if (compChoice === 1) {
      // Increment computerWinCounter by 1
      computerWinCounter++;

      // The question-mark icon representing the Computer's choice changes to the Paper Image.
      document.getElementById("comp-question-mark").src = "paper.png";

      // Since the computer won, the text in the paragraph containing the Computer wins counter changes to Wins + the computerWinCounter value.
      document.getElementById("computer-wins-counter").innerText =
        "Wins: \n" + computerWinCounter;

      // Animation using CSS class win-animation (CSS line 228) to transform the scale of the computer icon from 1 to 1.5, then return to its' former size after 1 second by removing the class.
      // Animation using CSS class win-animation-text (CSS line 205) to change the text color within the Computer wins counter paragraph to a darker blue then return to its former color after 1 second by removing the class.
      document.getElementById("computer").classList.add("win-animation");
      setTimeout(function () {
        document.getElementById("computer").classList.remove("win-animation");
      }, 1000);

      document
        .getElementById("computer-wins-counter")
        .classList.add("win-animation-text");
      setTimeout(function () {
        document
          .getElementById("computer-wins-counter")
          .classList.remove("win-animation-text");
      }, 1000);
    }
    // If computer's choice is Scissors (2 as a number value)
    else {
      // Increment playerWinCounter by 1
      playerWinCounter++;

      // The question-mark icon representing the Computer's choice changes to the Scissors Image.
      document.getElementById("comp-question-mark").src = "scissors.png";

      // Since the player won, the text in the paragraph containing the Player wins counter changes to Wins + the playerWinCounter value.
      document.getElementById("player-wins-counter").innerText =
        "Wins: \n" + playerWinCounter;

      // Animation using CSS class win-animation (CSS line 228) to transform the scale of the human icon from 1 to 1.5, then return to its' former size after 1 second by removing the class.
      // Animation using CSS class win-animation-text (CSS line 205) to change the text color within the Player wins counter paragraph to a darker blue then return to its former color after 1 second by removing the class.
      document.getElementById("human").classList.add("win-animation");

      setTimeout(function () {
        document.getElementById("human").classList.remove("win-animation");
      }, 1000);

      document
        .getElementById("player-wins-counter")
        .classList.add("win-animation-text");
      setTimeout(function () {
        document
          .getElementById("player-wins-counter")
          .classList.remove("win-animation-text");
      }, 1000);
    }
  });

  // Case 2. User clicks on the Paper image
  // The functions are the same as for Case 1, with relevant changes which are appropriate for this scenario
  document.getElementById("large-paper").addEventListener("click", function () {
    document.getElementById("player-question-mark").src = "paper.png";

    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0) {
      playerWinCounter++;
      document.getElementById("comp-question-mark").src = "rock.png";
      document.getElementById("player-wins-counter").innerText =
        "Wins: \n" + playerWinCounter;

      document.getElementById("human").classList.add("win-animation");
      setTimeout(function () {
        document.getElementById("human").classList.remove("win-animation");
      }, 1000);

      document
        .getElementById("player-wins-counter")
        .classList.add("win-animation-text");
      setTimeout(function () {
        document
          .getElementById("player-wins-counter")
          .classList.remove("win-animation-text");
      }, 1000);
    } else if (compChoice === 1) {
      drawCounter++;
      document.getElementById("comp-question-mark").src = "paper.png";
      document.getElementById("draw-counter").innerText =
        "Draw: " + drawCounter;

      document
        .getElementById("draw-counter")
        .classList.add("win-animation-text");
      setTimeout(function () {
        document
          .getElementById("draw-counter")
          .classList.remove("win-animation-text");
      }, 1000);
    } else {
      computerWinCounter++;
      document.getElementById("comp-question-mark").src = "scissors.png";
      document.getElementById("computer-wins-counter").innerText =
        "Wins: \n" + computerWinCounter;

      document.getElementById("computer").classList.add("win-animation");
      setTimeout(function () {
        document.getElementById("computer").classList.remove("win-animation");
      }, 1000);

      document
        .getElementById("computer-wins-counter")
        .classList.add("win-animation-text");
      setTimeout(function () {
        document
          .getElementById("computer-wins-counter")
          .classList.remove("win-animation-text");
      }, 1000);
    }
  });

  // Case 3. User clicks on the Scissors image
  // The functions are the same as for Case 1 and 2, with relevant changes which are appropriate for this scenario
  document
    .getElementById("large-scissors")
    .addEventListener("click", function () {
      document.getElementById("player-question-mark").src = "scissors.png";

      let compChoice = Math.floor(Math.random() * 3);

      if (compChoice === 0) {
        computerWinCounter++;
        document.getElementById("comp-question-mark").src = "rock.png";
        document.getElementById("computer-wins-counter").innerText =
          "Wins: \n" + computerWinCounter;

        document.getElementById("computer").classList.add("win-animation");
        setTimeout(function () {
          document.getElementById("computer").classList.remove("win-animation");
        }, 1000);

        document
          .getElementById("computer-wins-counter")
          .classList.add("win-animation-text");
        setTimeout(function () {
          document
            .getElementById("computer-wins-counter")
            .classList.remove("win-animation-text");
        }, 1000);
      } else if (compChoice === 1) {
        playerWinCounter++;
        document.getElementById("comp-question-mark").src = "paper.png";
        document.getElementById("player-wins-counter").innerText =
          "Wins: \n" + playerWinCounter;

        document.getElementById("human").classList.add("win-animation");
        setTimeout(function () {
          document.getElementById("human").classList.remove("win-animation");
        }, 1000);

        document
          .getElementById("player-wins-counter")
          .classList.add("win-animation-text");
        setTimeout(function () {
          document
            .getElementById("player-wins-counter")
            .classList.remove("win-animation-text");
        }, 1000);
      } else {
        drawCounter++;
        document.getElementById("comp-question-mark").src = "scissors.png";
        document.getElementById("draw-counter").innerText =
          "Draw: " + drawCounter;

        document
          .getElementById("draw-counter")
          .classList.add("win-animation-text");
        setTimeout(function () {
          document
            .getElementById("draw-counter")
            .classList.remove("win-animation-text");
        }, 1000);
      }
    });

  // By clicking the reset button, all three counter variables are reset to 0
  // The text in the paragraph containing the player win counter changes to "Wins + 0"
  // The text in the paragraph containing the draw counter changes to "Draw + 0"
  // The text in the paragraph containing the computer win counter changes to "Wins + 0"
  // The player's choice icon changes back to question mark icon
  // The computer's choice icon changes back to question mark icon

  document
    .getElementById("reset-button")
    .addEventListener("click", function () {
      drawCounter = 0;
      playerWinCounter = 0;
      computerWinCounter = 0;
      document.getElementById("player-question-mark").src = "question-mark.png";
      document.getElementById("comp-question-mark").src = "question-mark.png";
      document.getElementById("player-wins-counter").innerText =
        "Wins: \n" + playerWinCounter;
      document.getElementById("draw-counter").innerText =
        "Draw: " + drawCounter;
      document.getElementById("computer-wins-counter").innerText =
        "Wins: \n" + computerWinCounter;
    });
});
