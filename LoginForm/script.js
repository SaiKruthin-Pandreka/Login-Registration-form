const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");
const email = document.getElementById("email");



const togglePassword = document.getElementById("togglePassword");
togglePassword.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.src = "lock.png";
    } else {
        password.type = "password";
        togglePassword.src = "unlock.png";
    }
}


form.addEventListener("submit", (e) => {
    const errors = [];

    if (username.value.trim() === "") {
        errors.push("Username required")
    }
    if (password.value.length < 4) {
        errors.push("Password must be at least 4 charaters")
    }

    if (password.value.length > 10) {
        errors.push("Password must not be more than 10 charaters")
    }
    if (!/\d/.test(password.value)) {
        errors.push("Password must contain at least one number")
    }
    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
    else {
        
        if (username.value === "admin"&& password.value === "admin123") {
            alert("Login successful.");
        } else {
            alert("Invalid credentials");
        }

    }
    })
