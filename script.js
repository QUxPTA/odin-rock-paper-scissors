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

console.log(getComputerChoice());
