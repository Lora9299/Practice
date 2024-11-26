//ZD 7
// Task 7: Password Validator
// Create a function that checks if a password is valid:
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one number
// Return true if valid, false if not

function passwordValidator(password) {
  for (let i = 0; i < password.length; i++) {
    if (
      password.length >= 8 &&
      password[i] === password[i].toUpperCase() &&
      password[i] === password[i].toLowerCase() &&
      !isNaN(password[i])
    ) {
      return true;
    } else {
      return false;
    }
  }
}

let passCheck = passwordValidator("1Ri67Ld8");
console.log(passCheck);
