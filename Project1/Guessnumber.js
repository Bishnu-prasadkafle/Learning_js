/*
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Prompt the user for a guess
let userGuess = prompt("Guess the number (between 1 and 100):");

// Convert the user's input to a number
userGuess = Number(userGuess);

// Check if the guess is correct, greater, or lesser than the random number
if (userGuess === randomNumber) {
  alert("Congratulations! You guessed the correct number.");
} else if (userGuess > randomNumber) {
  alert("Your guess is too high.");
} else {
  alert("Your guess is too low.");
}
*/

let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;

while (inp != a) {
  score = score - 1;
  inp = prompt("Entere the number: ");

  if (inp == a) {
    console.log("congratulations! you guess the correct number.");
    console.log(`you guess the actual numbere in ${100 - score}chances.`);
  } else if (inp > a && inp < 100) {
    console.log("your number is greater than the actual number");
  } else if (inp < a && inp > 0) {
    console.log("your number is smaller the the actual number");
  } else {
    console.log("Enter number between 1 to 100");
  }
}
