var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
const errorMessage = document.getElementById("errorMessage"); // Ensure this element exists in your HTML
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const errors = [];

    // Validate username (example: must be at least 4 characters)
    if (username.value.length < 4) {
        errors.push("Username must be at least 4 characters.");
    }

    // Validate email format (example: simple check for @ symbol)
    if (!email.value.includes("@")) {
        errors.push("Invalid email format.");
    }

    // Validate password length (example: must be at least 6 characters)
    if (password.value.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }
    if (!/\d/.test(password.value)) {
        errors.push("Password must contain at least one number")
    }
    // Check if passwords match
    if (password.value !== password2.value) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        // Display error messages
        errorMessage.removeAttribute('hidden');
        errorMessage.innerHTML = errors.join('<br>');
    } else {
        // Submit the form if all validations pass
        // form.submit();
        alert("sign up comlete")
    }
});
