// Step 1: Get the login form
const loginForm = document.getElementById("loginForm");

// Step 2: Listen for form submit
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the page from refreshing

    // Step 3: Get user input
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Step 4: Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Step 5: Check if user exists
    if(storedUser) {
        // Check if email and password match
        if(storedUser.email === emailInput && storedUser.password === passwordInput) {
            alert("Login successful!");
            // Redirect to profile page
            window.location.href = "./newpage/new-page.html";
        } else {
            alert("Invalid email or password!");
        }
    } else {
        alert("No user found. Please sign up first!");
    }
});
