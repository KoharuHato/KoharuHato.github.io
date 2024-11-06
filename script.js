<!-- TIC TAC TOE -->
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



<!-- SHOPPING CART -->
document.addEventListener('DOMContentLoaded', () => {
    // Select all "Add to Cart" buttons and cart container
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');

    // Initialize cart count (could be dynamic based on saved cart items)
    let cartCountValue = 0;

    // Function to add items to the cart
    const addItemToCart = (productName, productPrice) => {
        // Create a new cart item element
        const cartItem = document.createElement('li');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
        cartItem.innerHTML = `
            <span>${productName} - $${productPrice}</span>
            <button class="remove-item text-red-500">Remove</button>
        `;

        // Add the cart item to the cart list
        cartItemsContainer.appendChild(cartItem);

        // Update cart count
        cartCountValue++;
        cartCount.textContent = cartCountValue;
        
        // Attach event listener to remove item
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            cartItemsContainer.removeChild(cartItem);
            cartCountValue--;
            cartCount.textContent = cartCountValue;
        });
    };

    // Loop through each "Add to Cart" button and attach the event listener
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product'); // Find the closest product div
            const productName = productElement.querySelector('h2').textContent; // Get product name
            const productPrice = productElement.querySelector('.price').textContent.replace('$', ''); // Get product price

            // Call function to add the item to the cart
            addItemToCart(productName, productPrice);
        });
    });

    // Toggle the visibility of the cart modal
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart');

    cartButton.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
    });

    closeCartButton.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });
});
