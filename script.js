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
