<!-- SHOPPING CART -->

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');

    let cartCountValue = 0;

    const addItemToCart = (productName, productPrice) => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
        cartItem.innerHTML = `
            <span>${productName} - $${productPrice}</span>
            <button class="remove-item text-red-500">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);

        cartCountValue++;
        cartCount.textContent = cartCountValue;

        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            cartItemsContainer.removeChild(cartItem);
            cartCountValue--;
            cartCount.textContent = cartCountValue;
        });
    };

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = productElement.querySelector('.price').textContent.replace('$', '');
            addItemToCart(productName, productPrice);
        });
    });

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
