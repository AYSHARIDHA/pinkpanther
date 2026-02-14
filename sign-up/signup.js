
  // Step 2.1: Select the signup form
  const signupForm = document.getElementById("signupForm");

  // Step 2.2: Listen for submit
  signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop page refresh

      // Step 2.3: Get form values
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Step 2.4: Validation
      if(fullname === "" || email === "" || password === "" || confirmPassword === "") {
          alert("Please fill in all fields.");
          return;
      }

      // Check if passwords match
      if(password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
      }

      // Check password length
      if(password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return;
      }

      // Step 2.5: Store in localStorage
      const user = {
          fullname: fullname,
          email: email,
          password: password
      };

      // Save the user to localStorage
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful! You can now login.");

      // Step 2.6: Redirect to login page
      window.location.href = "./login/login.html";
  });

