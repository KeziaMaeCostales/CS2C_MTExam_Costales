// favoriteNumberCalculation.js

// Declare the favorite number
let theFavNumber = 18; 

// Ask the user to guess the favorite number
let userGuess = parseInt(prompt("Guess the favorite number:"));

// Keep looping until the user guesses correctly
while (userGuess !== theFavNumber) {
    if (userGuess > theFavNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }
    // Prompt the user again
    userGuess = parseInt(prompt("Guess the favorite number:"));
}

// If the guess is correct
console.log("Correct! You guessed the favorite number.");
