// Define global variables to track game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Function to handle a player's move
function handleCellClick(clickedCell, clickedCellIndex) {
    // If cell is already marked or game is not active, return
    if (!gameActive || gameBoard[clickedCellIndex] !== '') return;

    // Mark the cell with the current player's symbol
    gameBoard[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    // Check for win
    checkWin();

    // Check for draw
    checkDraw();

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check if a player has won
function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            // Display win message
            document.getElementById('message').innerHTML = `${currentPlayer} wins!`;

            // End the game
            gameActive = false;
            return;
        }
    }
}

// Function to check for a draw
function checkDraw() {
    if (!gameBoard.includes('')) {
        // Display draw message
        document.getElementById('message').innerHTML = "It's a draw!";
        
        // End the game
        gameActive = false;
    }
}

// Function to reset the game
function resetGame() {
    // Clear the game board
    gameBoard = ['', '', '', '', '', '', '', '', ''];

    // Reset UI
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.innerHTML = '');

    // Reset game state
    gameActive = true;
    currentPlayer = 'X';

    // Clear message
    document.getElementById('message').innerHTML = '';
}

// Add event listeners to each cell
const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});
