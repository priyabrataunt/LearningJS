const order = {
  orderId: "ORD-001",
  customer: "Ahmed",
  items: ["laptop", "mouse", "keyboard", "monitor"],
  address: {
    city: "Denton",
    zip: "76201"
  }
};

// ! Your tasks:

// * Destructure orderId and customer from the order
// * Destructure only the first and third items from items
// * Destructure city from the nested address object
// * console.log all the values

const {orderId, customer} = order
const [first, , third] = order.items
const {city} = order.address
console.log(orderId, customer, city, first, third)