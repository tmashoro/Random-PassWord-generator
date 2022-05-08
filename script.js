// Assignment code here
var body = document.body;
var password = document.getElementById("password");
var generateBtn = document.getElementById("generate");

// Global variables
 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var passwordlength; // undefined will store length
var userpassword; // undefined will store user password
var lower;
var upper;
var number;
var special;

// Create a function called writepassword, within function new var passwordtext is replaced with new var password
function writePassword() { 
  var password = NewPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// anytime the generatebtn is clicked, call on the write function
generateBtn.addEventListener("click", writePassword);

function NewPassword() {
  passwordlength = prompt(" Choose a password length between 8 and 128 characters!")
  console.log(passwordlength)

  if (passwordlength < 8 || passwordlength > 128 || !passwordlength) {
    passwordlength = window.confirm("Attention!!! You need to choose a number between 8 and 128!");
    console.log(passwordlength);
  

  }
  /*else if (passwordlength > 8 || passwordlength < 128) {
    console.log(passwordlength);
}
*/
  // confirm is true or false 
  else  {
    upper = confirm("Will your password include an Upper Case letter?")
    console.log(upper);
    lower = confirm("Will your password include a lower case letter")
    console.log(lower);
    number = confirm("Will your password include a number?")
    console.log(number);
    special = confirm("Will your password include a special character?")
    console.log(special); 
  };
//  If someone does not make all four selections
  if (!upper && !lower && !number && !special) {
    userpassword = alert(" You need to make a choice");
  } // all 4 selections made
  else if (upper && lower && number && special) {
    userpassword = uppercase.concat(lowercase, numeric, specialcharacters);
    console.log(userpassword);
  }
// 3 selections
  else if (upper && lower && number) {
    userpassword = uppercase.concat(lowercase, numeric);
    console.log(userpassword);
  }
  else if (lower && number && special) {
    userpassword = lowercase.concat(numeric, specialcharacters);
    console.log(userpassword);
  }
  else if (upper && number && special) {
    userpassword = uppercase.concat(numeric, specialcharacters);
    console.log(userpassword);
  }
  else if (upper && lower && special) {
    userpassword = uppercase.concat(lowercase, specialcharacters);
    console.log(userpassword);
  }
  // Two choices
  else if (upper && lower) {
    userpassword = uppercase.concat(lowercase);
    console.log(userpassword);
  }
  else if (upper && number) {
    userpassword = uppercase.concat(numeric);
    console.log(userpassword);
  }
  else if (upper && special) {
    userpassword = uppercase.concat(specialcharacters);
    console.log(userpassword);
  }
  else if (lower && number) {
    userpassword = lowercase.concat(numeric);
    console.log(userpassword);
  }
  else if (lower && special) {
    userpassword = lowercase.concat(specialcharacters);
    console.log(userpassword);
  }
  else if (number && special) {
    userpassword = numeric.concat(specialcharacters);
    console.log(userpassword);
  }

  // Only one selection
  else if (upper) {
    userpassword = uppercase;
    console.log(userpassword);
  }
  else if (lower) {
    userpassword = lowercase;
    console.log(userpassword);
  }
  else if (number) {
    userpassword = numeric;
    console.log(userpassword);
  }
  else if (special) {
    userpassword = specialcharacters;
    console.log(userpassword);
  }
//Random selection
  var emptyarray = [];
  for (var i = 1; i <= passwordlength; i++) {
    var Randomnumber = userpassword[Math.floor(Math.random() * userpassword.length)];
    // password += values.substring(Randomnumber, Randomnumber + 1)
    // push randomnumber to end of emptyarray
    emptyarray.push(Randomnumber);
    //password += values[Randomnumber]
    console.log(Randomnumber)
  }

  var Passsword = emptyarray.join("");
  console.log(password);
  return Passsword;
  
}

