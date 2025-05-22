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

console.log(getHumanChoice());

function playRound(computerChoice, humanChoice) {
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer chose Paper: You lose! Paper beats Rock';
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    return 'Computer chose Scissors: You win! Rock beats Scissors';
  } else if (humanChoice === 'rock' && computerChoice === 'rock') {
    return "Computer chose Rock: It's a tie! Rock vs Rock";
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer chose Scissors: You lose! Scissors beats Paper';
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    return 'Computer chose Rock: You win! Paper beats Rock';
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    return "Computer chose Paper: It's a tie! Paper vs Paper";
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer chose Rock: You lose! Rock beats Scissors';
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    return 'Computer chose Paper: You win! Scissors beats Paper';
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    return "Computer chose Scissors: It's a tie! Scissors vs Scissors";
  } else {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors.';
  }
}
