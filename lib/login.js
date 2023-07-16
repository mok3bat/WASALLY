"strict";

// Function to validate user ID and password
function validateCredentials(userId, password) {
    // Simulated user credentials
    var validUserId = 'Mo.Stiet';
    var validPassword = 'pass123';
  
    if (userId.toLowerCase() === validUserId.toLowerCase() && password === validPassword) {
      return true; // Credentials are correct
    } else {
      return false; // Credentials are incorrect
    }
  }
  
  // Function to handle login form submission
  function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered user ID and password
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;
  
    // Validate the credentials
    var isValidCredentials = validateCredentials(userId, password);
    if (isValidCredentials) {
      console.log('Credentials are correct. Redirecting to index.html...');
      // Perform the redirect to index.html
      sessionStorage.setItem('invalidCredentials', 'false');
      window.location.href = 'index.html';
    } else {
      sessionStorage.setItem('invalidCredentials', 'true');
      console.log('Credentials are incorrect. Please try again.');
      // Add your error handling logic here
    }
  }
  
  // Attach event listener to the login button
  var loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', handleLoginFormSubmit);
  
  