const user = {
  firstName: "Sara",
  lastName: "Khan",
  age: 28,
  hobbies: ["reading", "coding", "gaming"],
};

// // ! Your tasks:

// // * Destructure firstName, lastName, and age from the user object

// const {firstName, lastName, age } = user
// console.log(firstName)
// console.log(lastName)
// console.log(age)

// // * Destructure the first two hobbies from the hobbies array

// const [first, second] = user.hobbies
// console.log(first, second)

// // * console.log all four values — firstName, lastName, age, hobby1, hobby2

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(first, second)


// * Logging all together

const { firstName, lastName, age } = user
const [first, second] = user.hobbies

console.log(firstName, lastName, age, first, second)