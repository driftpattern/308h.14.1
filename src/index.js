// https://ps-react-curriculum.herokuapp.com/308H/14/lab
// ALAB 308H.14.1 - Form Validation

function validateRegistration(event) {
    event.preventDefault();
    var form = document.getElementById("registration");
    var username = form.elements.username.value;
    var email = form.elements.email.value;
    var password = form.elements.password.value;
    var passwordCheck = form.elements.passwordCheck.value;
    var terms = form.elements.terms.checked;
  
    var errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.innerHTML = ""; // Clear previous error messages
  
    if (username.length < 3) {
      displayError("Username must be at least 3 characters long.");
    }
  
    if (!validateEmail(email)) {
      displayError("Invalid email address.");
    }
  
    if (password.length < 6) {
      displayError("Password must be at least 6 characters long.");
    }
  
    if (password !== passwordCheck) {
      displayError("Passwords do not match.");
    }
  
    if (!terms) {
      displayError("Please agree to the Terms of Use.");
    }
  
    if (errorDisplay.innerHTML === "") {
      // No errors, submit the form
      form.submit();
    }
  }
  
  function validateLogin(event) {
    event.preventDefault();
    var form = document.getElementById("login");
    var username = form.elements.username.value;
    var password = form.elements.password.value;
  
    var errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.innerHTML = ""; // Clear previous error messages
  
    if (username === "") {
      displayError("Please enter your username.");
    }
  
    if (password === "") {
      displayError("Please enter your password.");
    }
  
    if (errorDisplay.innerHTML === "") {
      // No errors, submit the form
      form.submit();
    }
  }
  
  function validateEmail(email) {
    // Basic email validation regex
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  function displayError(message) {
    var errorDisplay = document.getElementById("errorDisplay");
    var errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorDisplay.appendChild(errorMessage);
  }
  
  // Event listeners for form submissions
  document.getElementById("registration").addEventListener("submit", validateRegistration);
  document.getElementById("login").addEventListener("submit", validateLogin);
  