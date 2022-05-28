function computerPlay() {
  const hands =['rock', 'paper', 'scissors'];
  return hands[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return {message: `It's a tie! Both players picked ${playerSelection}.`, playerWon: false, computerWon: false};
      case 'paper':
        return {message: `You lose! ${computerSelection} beats ${playerSelection}.`, playerWon: false, computerWon: true};
      case 'scissors':
        return{message: `You win! ${playerSelection} beats ${computerSelection}.`, playerWon: true, computerWon: false};
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return{message: `You win! ${playerSelection} beats ${computerSelection}.`, playerWon: true, computerWon: false};
      case 'paper':
        return {message: `It's a tie! Both players picked ${playerSelection}.`, playerWon: false, computerWon: false};
      case 'scissors':
        return {message: `You lose! ${computerSelection} beats ${playerSelection}.`, playerWon: false, computerWon: true};
    }
  } else {
    switch (computerSelection) {
      case 'rock':
        return {message: `You lose! ${computerSelection} beats ${playerSelection}.`, playerWon: false, computerWon: true};
      case 'paper':
        return{message: `You win! ${playerSelection} beats ${computerSelection}.`, playerWon: true, computerWon: false};
      case 'scissors':
        return {message: `It's a tie! Both players picked ${playerSelection}.`, playerWon: false, computerWon: false};
    }
  }
}

function playGame() {

}

playRound('rock', computerPlay());
playRound('rock', computerPlay());
playRound('rock', computerPlay());