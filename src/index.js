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
  errorDisplay.innerHTML = ""; // clear any old error messages

  if (!validateUsername(username)) {
    displayError("Invalid username.");
  }

  if (!validateEmail(email)) {
    displayError("Invalid email address.");
  }

  if (!validatePassword(password)) {
    displayError("Invalid password.");
  }

  if (password !== passwordCheck) {
    displayError("Passwords do not match.");
  }

  if (!terms) {
    displayError("Please agree to the Terms of Use.");
  }

  if (errorDisplay.innerHTML === "") {
    form.submit();
  }
}





function validateLogin(event) {
  event.preventDefault();
  var form = document.getElementById("login");
  var username = form.elements.username.value;
  var password = form.elements.password.value;

  var errorDisplay = document.getElementById("errorDisplay");
  errorDisplay.innerHTML = ""; // clear any old error messages

  if (!validateUsername(username)) {
    displayError("Invalid username.");
  }

  if (!validatePassword(password)) {
    displayError("Invalid password.");
  }

  if (validateEmail(password)) {
    displayError("Password cannot be an email address.");
  }

  if (errorDisplay.innerHTML === "") {
    form.submit();
  }
}




// three validators (username, pw and email)
function validateUsername(username) {
  // username validation here
  return username.length >= 3;
}



function validatePassword(password) {
  // password validation here
  return password.length >= 6;
}



function validateEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  var domainRegex = /example\.com$/i;
  return emailRegex.test(email) && !domainRegex.test(email);
}





function displayError(message) {
  var errorDisplay = document.getElementById("errorDisplay");
  var errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorDisplay.appendChild(errorMessage);
}





document.getElementById("registration").addEventListener("submit", validateRegistration);
document.getElementById("login").addEventListener("submit", validateLogin);
