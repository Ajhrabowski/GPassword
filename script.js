// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
  var passwordLength = prompt("How long would you like your pasword to be?");
  var lowercase = confirm("Do you want lowercase letters?");
  var uppercase = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialcharacters = confirm("Do you want special characters in your password?");

  if (lowercase){
    alert("You chose lowercase")
  } 

  if (uppercase){
    alert("You chose uppercase")
  } 
  
  if (numbers){
    alert("You chose numbers")
  } 

  if (specialcharacters){
    alert("You chose special characters")
  } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
