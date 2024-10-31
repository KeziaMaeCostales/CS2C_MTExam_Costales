// Initialize an array to store three colors
const ps = require("prompt-sync");
const prompt = ps();
let favoriteColors = [];

// Collect three colors from the user using prompt() and add them to the array
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    favoriteColors.push(color);
    console.log("Updated color list:", favoriteColors);
}

// Ask the user for an additional color and add it to the array
let newColor = prompt("Add another color to the list:");
favoriteColors.push(newColor);
console.log("Updated color list with new color:", favoriteColors);
