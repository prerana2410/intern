// Variables to track the game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // The game board array
let gameActive = true; // Flag to track if the game is ongoing

// Array of winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to handle cell click
function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedIndex = Array.from(clickedCell.parentElement.children).indexOf(clickedCell);

  if (gameBoard[clickedIndex] !== '' || !gameActive) {
    return; // If the cell is already filled or the game is over, do nothing
  }

  // Mark the cell with the current player's symbol
  gameBoard[clickedIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  // Check if the current player has won
  if (checkWinner()) {
    document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (gameBoard.every(cell => cell !== '')) {
    // If the board is full and no winner, it's a draw
    document.getElementById('status').textContent = "It's a draw!";
    gameActive = false;
  } else {
    // Switch the current player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Function to check for a winner
function checkWinner() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer;
  });
}

// Function to reset the game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  document.getElementById('status').textContent = "Player X's turn";

  const cells = document.querySelectorAll('[data-cell]');
  cells.forEach(cell => {
    cell.textContent = '';
  });
}

// Add event listeners to each cell
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});
