<script>
  // Initialize game variables
  let cells = Array(9).fill(null);
  let currentPlayer = 'X';
  let winner = null;

  // Get DOM elements
  const board = document.getElementById('board');
  const message = document.getElementById('message');

  // Function to check if a player has won
  function checkWinner() {
      const winningCombos = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]             // Diagonals
      ];

      for (let combo of winningCombos) {
          const [a, b, c] = combo;
          if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
              return cells[a];
          }
      }

      return null; // No winner
  }

  // Function to handle a player's move
  function handleMove(cellIndex) {
      if (cells[cellIndex] || winner) return; // Cell already filled or game already won

      cells[cellIndex] = currentPlayer;
      renderBoard();
      
      winner = checkWinner();
      if (winner) {
          message.textContent = `Player ${winner} wins!`;
      } else if (!cells.includes(null)) {
          message.textContent = "It's a tie!";
      } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          message.textContent = `Player ${currentPlayer}'s turn`;
      }
  }

  // Function to reset the game
  function resetGame() {
      cells = Array(9).fill(null);
      currentPlayer = 'X';
      winner = null;
      message.textContent = `Player ${currentPlayer}'s turn`;
      renderBoard();
  }

  // Function to render the game board
  function renderBoard() {
      board.innerHTML = '';
      cells.forEach((cell, index) => {
          const cellElement = document.createElement('div');
          cellElement.textContent = cell || ''; // Show cell value or empty string
          cellElement.classList.add('cell');
          cellElement.addEventListener('click', () => handleMove(index));
          board.appendChild(cellElement);
      });
  }

  // Render initial game board
  renderBoard();
  message.textContent = `Player ${currentPlayer}'s turn`;
</script>
