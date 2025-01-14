function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Check if fields are empty or if password is too short
    if (username === "" || password === "") {
        errorMessage.textContent = "Both username and password are required.";
        errorMessage.style.display = "block";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        showThankYouMessage(username);
        return false; // Prevent form from submitting for demo purposes
    }
}

// Function to display a personalized thank-you message
function showThankYouMessage(username) {
    const formContainer = document.querySelector(".container");
    formContainer.innerHTML = `<h2 class="thank-you-message">Thank you, ${username}, for signing into Cooking Delight!</h2>`;
}