const favNumber = 26

let userGuess;
while (true) {
    userGuess = parseInt(prompt("Guess the favorite number (between 1 and 100):"));

    if (isNaN(userGuess)) {
        console.log("Please enter a valid number.");
    } else if (userGuess < favNumber) {
        console.log("Too low. Try again.");
    } else if (userGuess > favNumber) {
        console.log("Too high. Try again.");
    } else {
        console.log("Correct! You guessed the favorite number.");
        break; // Exit the loop if the guess is correct
    }
}
