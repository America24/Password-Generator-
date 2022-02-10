// assignment code here 

//elements to generate password
var generateBtn = document.querySelector("#generate");

var passwordLength; 
var confirmUpper;
var confirmLower;
var confirmSymbol;
var confirmNumber;
var userSelected;

var upperArray = [
  "A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];

var lowerArray = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
]

var symbolArray = 
[
  "!","@","#","$","%","^","&","*", "(",")","-","_", ",",".","/","?",";",":",
]

var numberArray =
[
  "0","1","2","3","4","5","6","7","8","9",
]
console.log(upperArray.length);

console.log(lowerArray.length);

console.log(symbolArray.length);

console.log(numberArray.length);

// get password for password input
function getPassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  
  console.log(password, "password");
  passwordText.value = password;
}

// event listener to generate button for password
generateBtn.addEventListener("click", getPassword);


function generatePassword () {
  var genPass = "";
  passwordLength = prompt (
    "Choose between 8 and 128 for your characters"
  ); 

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = confirm ("You must choose between 8 and 128");
    passwordLength = prompt (
     "Choose between 8 and 128 for your characters"
    );

    console.log("pass length " + passwordLength);
  }
  // uppercase, lowercase, symbols, numeric characters
  {
    confirmUpper = confirm("upper case?");
    console.log("upper case" + confirmUpper);

    confirmLower = confirm("lower case?");
    console.log("lower case" + confirmLower);

    confirmSymbol = confirm("symbols?");
    console.log("symbol" + confirmSymbol);

    confirmNumber = confirm("numbers?");
    console.log("number" + confirmNumber);
  }

  const possibleCharacters = getPossibleCharacters();
  const noOptionsSelected = possibleCharacters.length === 0;

  if(noOptionsSelected) {
    alert("Out of the 4 options, 1 must be picked. Try again.");
    return genPass(); 
  }

  for (let index = 0; index < passwordLength; index++) {
    var selectedChararcters = possibleCharacters.flat();
    var char = selectedChararcters[Math.floor(Math.random() * selectedChararcters.length)]; genPass += char;
  }

  console.log (genPass, "");
  return noOptionsSelected ?"": genPass; 
}

function getPossibleCharacters () {
  const possibleCharacters = [];
  if (confirmUpper) {
    possibleCharacters.push(upperArray);
  }

  if (confirmLower) {
    (possibleCharacters.push) = (lowerArray);
  }

  if (confirmSymbol) {
    possibleCharacters.push = (symbolArray);
  }

  if (confirmNumber) {
    possibleCharacters.push = (numberArray);
  }

  return possibleCharacters;


}