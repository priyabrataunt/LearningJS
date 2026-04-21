const nums = [1, 2, 3];
console.log(...nums);

const a = [1,2,3];
const b = [4,5,6];
console.log(...a, ...b);

const person = {name:"Ali", age: 26};
const extra = {city:"Denton"};

const full = {...person, ...extra}
console.log(full)