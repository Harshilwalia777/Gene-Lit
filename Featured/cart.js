// Fetch cart items from local storage and display them on the cart page
window.onload = function () {
    displayCartItems();
};

function addToCart(title, price) {
    // Get current cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add item to cart
    cart.push({ title, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} has been added to your cart.`);
}

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    // Clear existing content
    cartItemsContainer.innerHTML = '';
    let totalAmount = 0;

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.title}</span>
            <span>₹${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
        totalAmount += item.price;
    });

    // Update total amount
    totalAmountElement.innerText = totalAmount;
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Your order total is ₹${document.getElementById('total-amount').innerText}. Proceeding to checkout .`);
        document.getElementById('orderConfirmationModal').style.display = 'flex';
        localStorage.removeItem('cart'); // Clear cart after checkout
        displayCartItems();
    }
}
function closeModal() {
    document.getElementById('orderConfirmationModal').style.display = 'none';
    clearCart(); // Call the function to clear the cart
}

function clearCart() {
    localStorage.removeItem('cart'); // Clear cart after checkout
}

