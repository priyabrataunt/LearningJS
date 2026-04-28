const cart1 = ["apple", "banana", "mango"];
const cart2 = ["milk", "bread"];

const user = { name: "Ahmed", age: 28 };

// ! Your tasks:

// * Combine cart1 and cart2 into one array called fullCart
// * Add a new property city: "Denton" to user without modifying the original — store it in a new variable called updatedUser
// * Write a function printAll that accepts any number of arguments and logs them all — use Rest for this
// * Call printAll with all items from fullCart — use Spread for this

const fullcart = [...cart1, ...cart2];
const updatedUser = {...user, city: "Denton"};
console.log(updatedUser);

function printAll(...args){
    console.log(args)
}

printAll(...fullcart);

// user.add(city:"Denton"};

// const updatedUser = user.add(city:"Denton");

// function printAll(){

// }
