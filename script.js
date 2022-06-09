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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let result;
  while (true) {
    if (playerScore == 5 || computerScore == 5) {
      console.log("GAME FINISHED");
      return;
    } else {
      result = playRound(playerSelection, computerPlay());
      if (result.playerWon || result.computerWon) {
        if (result.playerWon) {
          console.log(result.message);
          playerScore++;
          console.log(`PLAYER: ${playerScore} | COMPUTER: ${computerScore}`);
        } else {
          console.log(result.message);
          computerScore++;
          console.log(`PLAYER: ${playerScore} | COMPUTER: ${computerScore}`);
        }
      } else
        console.log(
          result.message +
            "\n" +
            `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`
        );
    }
  }
}

let playerScore = 0;
let computerScore = 0;
const playerScoreOnTable = document.querySelector('#playerScore');
const computerScoreOnTable = document.querySelector('#computerScore');
// const scoreTable = document.querySelector(".scoreTable");
const roundResultMessage = document.createElement("div");
roundResultMessage.classList.add('roundResult')
const mainSection = document.querySelector("main");
mainSection.appendChild(roundResultMessage);

const handButtons = document.querySelectorAll(".hand");
handButtons.forEach((handButton) => {
  handButton.addEventListener("click", (e) => {
    handButton.classList.add('clicked');

    let playerSelection = handButton.attributes["data-handType"].value;
    let result = playRound(playerSelection, computerPlay());
    if (result.playerWon || result.computerWon) {
      if (result.playerWon) {
        roundResultMessage.textContent = result.message;
        playerScore++;
        playerScoreOnTable.textContent = playerScore;
      } else {
        roundResultMessage.textContent = result.message;
        computerScore++;
        computerScoreOnTable.textContent = computerScore;
      }
    } else {
      roundResultMessage.textContent = result.message;
    }
  });
});

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
