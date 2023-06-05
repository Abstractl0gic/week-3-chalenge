// Setting an array for each type of character to be included.
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChars = ['!','@','#','$','%','^','&','*','(',')','_','-','+','='];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var passwordLength = 8;
var userChoice =[];
var passwordButton = document.querySelector("#generate");
// letting the Password button call the HTML document

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// setting a function to tell the page what to do when the user answers the prompts
function generatePassword() {
// The function that occurs when the users clicks the button.
  var userPassword = '';
  
  for(var i = 0; i < passwordLength; i++) {
    var randomChars = Math.floor(Math.random() * userChoice.length);
    userPassword = userPassword + userChoice[randomChars];
  }
  return userPassword
}
// tried to create a for loop to iterate the function for each number of characters the user punches in the prompt
function userPrompt(){
  userChoice = [];
// empties the arrays from above when user tries to make consecutive passwords
    passwordLength = (prompt("Enter the number of characters your password needs to be (must be between 8 and 128)"));
    if(passwordLength < 8 || passwordLength > 128) {
      alert("This is not a valid entry.  Try again with a number between 8-128");
      return false
    }
    if (confirm("Does your password require lowercase letters?")) {
        userChoice = userChoice.concat(lowerCase);
    }
    if (confirm("Does your password require uppercase letters?")) {
        userChoice = userChoice.concat(upperCase);
    }
    if (confirm("Does your password require numbers?")) {
      userChoice = userChoice.concat(number);
  }
  if (confirm("Does your password require special characters?")) {
      userChoice = userChoice.concat(specialChars);
  }
  return true;
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var validEntry = userPrompt();
  if (validEntry){
// the goal of this was to only allow for valid entries.  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

