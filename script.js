function computerPlay() {
  const hands = ["rock", "paper", "scissors"];
  return hands[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return {
          message: `It's a tie! Both players picked ${playerSelection}.`,
          playerWon: false,
          computerWon: false,
        };
      case "paper":
        return {
          message: `You lose! ${computerSelection} beats ${playerSelection}.`,
          playerWon: false,
          computerWon: true,
        };
      case "scissors":
        return {
          message: `You win! ${playerSelection} beats ${computerSelection}.`,
          playerWon: true,
          computerWon: false,
        };
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return {
          message: `You win! ${playerSelection} beats ${computerSelection}.`,
          playerWon: true,
          computerWon: false,
        };
      case "paper":
        return {
          message: `It's a tie! Both players picked ${playerSelection}.`,
          playerWon: false,
          computerWon: false,
        };
      case "scissors":
        return {
          message: `You lose! ${computerSelection} beats ${playerSelection}.`,
          playerWon: false,
          computerWon: true,
        };
    }
  } else {
    switch (computerSelection) {
      case "rock":
        return {
          message: `You lose! ${computerSelection} beats ${playerSelection}.`,
          playerWon: false,
          computerWon: true,
        };
      case "paper":
        return {
          message: `You win! ${playerSelection} beats ${computerSelection}.`,
          playerWon: true,
          computerWon: false,
        };
      case "scissors":
        return {
          message: `It's a tie! Both players picked ${playerSelection}.`,
          playerWon: false,
          computerWon: false,
        };
    }
  }
}

let playerScore = 0;
let computerScore = 0;
const playerScoreOnTable = document.querySelector('#playerScore');
const computerScoreOnTable = document.querySelector('#computerScore');
const roundResultMessage = document.createElement("div");
roundResultMessage.classList.add('roundResult')
const mainSection = document.querySelector("main");
mainSection.appendChild(roundResultMessage);

const handButtons = document.querySelectorAll(".hand");
handButtons.forEach((handButton) => {
  handButton.addEventListener("click", (e) => {
    handButton.classList.add('clicked');
    // Updates DOM with data received from the object returned by playRound()
    // The object has two booleans (playerWon and computerWon) and a string
    // 'message' which announces the result of the round.
    let playerSelection = handButton.attributes["data-handType"].value;
    let result = playRound(playerSelection, computerPlay());
    if (result.playerWon || result.computerWon) {
      if (result.playerWon) {
        roundResultMessage.textContent = result.message;
        playerScore++;
        playerScoreOnTable.textContent = playerScore;
        if (playerScore == 5) endGame('Player');
      } else {
        roundResultMessage.textContent = result.message;
        computerScore++;
        computerScoreOnTable.textContent = computerScore;
        if (computerScore == 5) endGame('Computer');
      }
    } else {
      roundResultMessage.textContent = result.message;
    }
  });
});

// Button animations 
handButtons.forEach(handButton => {
  handButton.addEventListener('mouseover', (e) => {
    handButton.classList.add('hovering');
  })
});

handButtons.forEach(handButton => {
  handButton.addEventListener('mouseout', (e) => {
    handButton.classList.remove('hovering');
  })
});

handButtons.forEach(handButton => {
  handButton.addEventListener('transitionend', (e) => {
    if (handButton.classList.contains('clicked')) {
      handButton.classList.remove('clicked');
    }
  })
});

function endGame(winner) {
  alert(`Game finished! ${winner} wins!`);
  playerScore = 0;
  computerScore = 0;
  playerScoreOnTable.textContent = 0;
  computerScoreOnTable.textContent = 0;
}