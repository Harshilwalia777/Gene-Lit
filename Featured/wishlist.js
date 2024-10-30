// Initialize wishlist items from local storage or as an empty array
let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

// Function to save the wishlist to local storage
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
   
}

// Function to render the wishlist items on the page
function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlist-items');
    wishlistContainer.innerHTML = ''; // Clear existing items

    if (wishlistItems.length === 0) {
        document.querySelector('.empty-message').style.display = 'block';
        return;
    } else {
        document.querySelector('.empty-message').style.display = 'none';
    }

    wishlistItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'wishlist-item';
        itemDiv.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="content">
                <h3>${item.title}</h3>
                <div class="price">${item.price}</div>
            </div>
            <button class="remove-btn" onclick="removeFromWishlist(${index})">Remove</button>
        `;
        wishlistContainer.appendChild(itemDiv);
    });
}

// Function to add an item to the wishlist without duplicates
function addToWishlist(item) {
    // Check if item already exists in wishlist
    if (wishlistItems.some(existingItem => existingItem.title === item.title)) {
        alert("Item is already in the wishlist!");
        return;
    }
    
    wishlistItems.push(item); // Add the item to the wishlist
    saveWishlist(); // Save the updated list to local storage
    renderWishlist(); // Re-render the wishlist
    alert("Item added to wishlist!"); // Confirmation message
}

// Function to remove an item from the wishlist
function removeFromWishlist(index) {
    wishlistItems.splice(index, 1); // Remove item from array
    saveWishlist(); // Save the updated list to local storage
    renderWishlist(); // Re-render wishlist
}

// Initial render of wishlist on page load
document.addEventListener('DOMContentLoaded', renderWishlist);

// Wrapper function to create an item object and add it to the wishlist
function addItemToWishlist(title, price, imgSrc) {
    const item = { title, price, imgSrc };
    alert('Item is added to the wish list.')
    addToWishlist(item);
    
}
