// Hardcoded credentials
const validUsername = "hello123";
const validPassword = "pass123";

function login() {
    // Get values from the form inputs
    const enteredUsername = document.getElementById("un").value;
    const enteredPassword = document.getElementById("pw").value;

    // Check if credentials are correct
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Redirect to homepage if successful
        window.location.href = "../homepage/home.html"; // Replace with your actual homepage URL
    } else {
        // Display error message and clear password for retry
        alert("Incorrect username or password. Please try again.");
        document.getElementById("pw").value = "";
    }
}

// Function to show an alert popup and switch to the login form
function register() {
    // Display a success message with alert
    alert("Registration successful! Redirecting to login...");

    // Switch to the login form by removing 'active' from wrapper
    document.querySelector('.wrapper').classList.remove('active'); // Show login form
}

// Toggle between Login and Register views
document.querySelector('.register-link').addEventListener('click', () => {
    document.querySelector('.wrapper').classList.add('active'); // Show registration form
});

document.querySelector('.login-link').addEventListener('click', () => {
    document.querySelector('.wrapper').classList.remove('active'); // Show login form
});
