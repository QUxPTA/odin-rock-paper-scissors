function getComputerChoice() {
  let value = Math.floor(Math.random() * 3) + 1;
  if (value === 1) {
    return 'rock';
  } else if (value === 2) {
    return 'paper';
  } else if (value === 3) {
    return 'scissors';
  } else {
    return 'Something went wrong';
  }
}

function getHumanChoice() {
  let value = prompt(
    'Pick a choice (either: Rock, Paper, or Scissors)',
    'Rock'
  );

  // Strip whitespace and convert to lowercase
  return value.trim().toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    return 'lose';
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    return 'win';
  } else if (humanChoice === 'rock' && computerChoice === 'rock') {
    return 'tie';
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    return 'lose';
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    return 'win';
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    return 'tie';
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    return 'lose';
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    return 'win';
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    return 'tie';
  } else {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors.';
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  // Play 5 rounds
  while (roundsPlayed < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let result = playRound(computerChoice, humanChoice);

    // Create a message based on the result
    let message = '';
    if (result === 'win') {
      humanScore++;
      message = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice} --> You win!`;
    } else if (result === 'lose') {
      computerScore++;
      message = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice} --> You lose!`;
    } else if (result === 'tie') {
      message = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice} --> It's a tie!`;
    } else {
      message = result; // For invalid choices
      continue; // Don't count invalid rounds
    }

    // Display the message and current score
    console.log(message);
    console.log(
      `Current Score - You: ${humanScore}, Computer: ${computerScore}`
    );

    roundsPlayed++;
  }

  // After the loop, compare scores and display winner
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log('You won the game!');
  } else if (computerScore > humanScore) {
    console.log('Computer wins the game!');
  } else {
    console.log('The game ended in a tie!');
  }

  // Ask to play again
  let playAgain = confirm('Do you want to play again?');
  if (playAgain) {
    playGame(); // Restart the game
  } else {
    console.log('Thanks for playing!');
  }
}

playGame();
