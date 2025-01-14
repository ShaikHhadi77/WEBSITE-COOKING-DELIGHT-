document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (for demonstration purposes)
    if (name && email && message) {
        document.getElementById('responseMessage').innerText = "Thank you, " + name + "! Your message has been sent.";
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        document.getElementById('responseMessage').innerText = "Please fill in all fields.";
    }
});