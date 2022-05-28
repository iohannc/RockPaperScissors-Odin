function computerPlay() {
  const hands =['rock', 'paper', 'scissors'];
  return hands[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        console.log(`It's a tie! Both players picked ${playerSelection}.`);
        break;
      case 'paper':
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        break;
      case 'scissors':
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        break;
    }
  }
}

playRound('rock', computerPlay());
playRound('rock', computerPlay());
playRound('rock', computerPlay());