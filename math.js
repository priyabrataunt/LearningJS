// ! 📁 Scenario: Simple Math Utility
// You have two files:
// math.js — should contain:

// A named export function multiply(a, b) that returns a * b
// A named export function divide(a, b) that returns a / b
// A default export function square(n) that returns n * n

// main.js — should:

// Import multiply and divide as named imports
// Import square as a default import
// Use all three functions and console.log the results

export function multiply(a,b){
    return a * b
}

export default function divide(a,b){
    return a / b
}

export function square(n){
    return n * n
}