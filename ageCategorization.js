const userAge = parseInt(prompt("Enter your age:"));

if (userAge < 5) {
    console.log("You are a Toddler.");
} else if (userAge <= 12) {
    console.log("You are a Child.");
} else if (userAge <= 19) {
    console.log("You are a Teenager.");
} else if (userAge <= 35) {
    console.log("You are a Young Adult.");
} else if (userAge <= 60) {
    console.log("You are Middle-Aged.");
} else {
    console.log("You are a Senior.");
}
