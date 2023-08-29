// Assignment Code
var generateBtn = document.querySelector("#generate");
var availiableCharacters="";
var passwordLength = 128;
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+=-<>,./{}[]"

function generatePassword(){
  let password ="";
  
  passwordLength = prompt("How long would you like your pasword to be?");
  var lowercaseFlag = confirm("Do you want lowercase letters?");
  var uppercaseFlag = confirm("Do you want uppercase letters?");
  var numbersFlag = confirm("Do you want numbers in your password?");
  var symbolsFlag = confirm("Do you want symbols in your password?");

 


  if (lowercaseFlag){
    availiableCharacters += lowercase
    alert("You chose lowercase")
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
  } 

  if (uppercaseFlag){
    availiableCharacters += uppercase
    alert("You chose uppercase")
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
  } 
  
  if (numbersFlag){
    availiableCharacters += numbers
    alert("You chose numbers")
    password += numbers[Math.floor(Math.random()*numbers.length)];
  } 

  if (symbolsFlag){
    availiableCharacters += symbols
    alert("You chose symbols")
    password += symbols[Math.floor(Math.random()*symbols.length)];
  } 

  for (var i=password.length; i < passwordLength; i++) {
   
    password += availiableCharacters[Math.floor(Math.random()*availiableCharacters.length)];

 }

  return password;
}

// Write password to the #password input

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;


// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);



