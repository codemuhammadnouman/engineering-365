/**
 * Day 001 — Logic Foundations
 * Problem: Reverse a string
 */

const input = "hello";

// Convert string to array
const chars = input.split("");

// Reverse the array
const reversedChars = chars.reverse();

// Join back into string
const output = reversedChars.join("");

console.log("Original:", input);
console.log("Reversed:", output);