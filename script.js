var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specials = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~", "\'", "\""];
var allowedChars = [];
var pwLength = 0;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var changeSettings = true;
  if (pwLength !== 0) {
    changeSettings = confirm("Change settings for password generator?");
  }
  var password = generatePassword(changeSettings);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(changeSettings) {
  var result = "";
  var rand = 0;
  if (changeSettings) {
    allowedChars = [];
    promptUser();
  }
  for (var i = 0; i < pwLength; i++) {
    rand = Math.floor(Math.random() * allowedChars.length);
    result = result.concat(allowedChars[rand]);
  }
  return result;
}

function promptUser() {
  var validLength = false;
  // Types in order: lowercase, uppercase, numbers, special
  var allowedTypes = [false, false, false, false];
  while (!validLength) {
    pwLength = prompt("Select a password length (from 8 to 128 inclusive):");
    if (pwLength === null) {
      return;
    }
    if (pwLength >= 8 && pwLength <= 128) {
      pwLength = Math.floor(pwLength);
      validLength = true;
    }
    else {
      alert("Invalid length, try again!");
    }
  }
  allowedTypes[0] = confirm("Allow lowercase letters?"); 
  allowedTypes[1] = confirm("Allow uppercase letters?");
  allowedTypes[2] = confirm("Allow numbers?");
  allowedTypes[3] = confirm("Allow special characters?");
  if (!(allowedTypes[0] || allowedTypes[1] || allowedTypes[2] || allowedTypes[3])) {
    alert("No characters were specified. Defaulting to lowercase letters only.");
    allowedChars = allowedChars.concat(lowercase);
  }
  else {
    if (allowedTypes[0]) {
      allowedChars = allowedChars.concat(lowercase);
    }
    if (allowedTypes[1]) {
      allowedChars = allowedChars.concat(uppercase);
    }
    if (allowedTypes[2]) {
      allowedChars = allowedChars.concat(numbers);
    }
    if (allowedTypes[3]) {
      allowedChars = allowedChars.concat(specials);
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
