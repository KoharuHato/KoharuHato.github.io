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
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 15.00 },
        { id: 3, name: 'Product 3', price: 20.00 },
    ];

    const cart = [];
    const productList = document.getElementById('product-list');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const closeCartButton = document.getElementById('close-cart');

    // Render products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'bg-white p-6 rounded-lg shadow-lg';
        productDiv.innerHTML = `
            <h2 class="text-xl font-semibold">${product.name}</h2>
            <p class="text-gray-700">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart bg-pink-500 text-white px-4 py-2 rounded mt-4" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                Add to Cart
            </button>
        `;
        productList.appendChild(productDiv);
    });

    // Add to Cart
    productList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const button = event.target;
            const productId = parseInt(button.getAttribute('data-id'));
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        }
    });

    // Update Cart
    function updateCart() {
        cartItems.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'flex justify-between mb-2';
            cartItem.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItems.appendChild(cartItem);
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        cartCount.textContent = totalItems;
        document.getElementById('checkout-button').textContent = `Checkout ($${totalPrice.toFixed(2)})`;
    }

    // Show Cart
    cartButton.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
    });

    // Close Cart
    closeCartButton.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });
});
