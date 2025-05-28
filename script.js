function getComputerChoice () {
  const value = Math.floor(Math.random() * 3) + 1
  if (value === 1) {
    return 'rock'
  } else if (value === 2) {
    return 'paper'
  } else if (value === 3) {
    return 'scissors'
  } else {
    return 'Something went wrong'
  }
}

function playRound (computerChoice, humanChoice) {
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    return 'lose'
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    return 'win'
  } else if (humanChoice === 'rock' && computerChoice === 'rock') {
    return 'tie'
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    return 'lose'
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    return 'win'
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    return 'tie'
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    return 'lose'
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    return 'win'
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    return 'tie'
  } else {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors.'
  }
}

let humanScore = 0
let computerScore = 0
let roundCount = 0
const TOTAL_ROUNDS = 5

function handleClick (playerChoice) {
  if (roundCount >= TOTAL_ROUNDS) return // Prevent further play after 5 rounds

  const computerChoice = getComputerChoice()
  const result = playRound(computerChoice, playerChoice)

  const roundResult = document.getElementById('round-result')
  const scoreDisplay = document.getElementById('score')
  const gameWinner = document.getElementById('game-winner')

  roundCount++ // Increment round count for every play (win, lose or tie)

  if (result === 'win') {
    humanScore++
    roundResult.textContent = `Round ${roundCount}: You win this round! ${playerChoice} beats ${computerChoice}.`
  } else if (result === 'lose') {
    computerScore++
    roundResult.textContent = `Round ${roundCount}: You lose this round! ${computerChoice} beats ${playerChoice}.`
  } else {
    roundResult.textContent = `Round ${roundCount}: It's a tie! You both chose ${playerChoice}.`
  }

  scoreDisplay.textContent = `👨‍💻 You: ${humanScore} || 🖥️ Computer: ${computerScore}`

  if (roundCount === TOTAL_ROUNDS) {
    if (humanScore > computerScore) {
      gameWinner.textContent = '🎉 You won the game!'
    } else if (computerScore > humanScore) {
      gameWinner.textContent = '💻 Computer wins the game!'
    } else {
      gameWinner.textContent = '🤝 The game ended in a tie!'
    }
  }
}

// Attach listeners to buttons
document
  .getElementById('rock')
  .addEventListener('click', () => handleClick('rock'))
document
  .getElementById('paper')
  .addEventListener('click', () => handleClick('paper'))
document
  .getElementById('scissors')
  .addEventListener('click', () => handleClick('scissors'))

// Replaying the game
function resetGame () {
  humanScore = 0
  computerScore = 0
  roundCount = 0

  // Reset UI elements
  document.getElementById('round-result').textContent = ''
  document.getElementById('score').textContent = '👨‍💻 You: 0 || 🖥️ Computer: 0'
  document.getElementById('game-winner').textContent = ''
}

// Add event listener for replay button
document.getElementById('replay').addEventListener('click', resetGame)
