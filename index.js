console.clear();

var coffeeOrders = require("./coffeeShopData.json");
var coffeeOrdersEdits = require("./coffeeFunctions.js");

console.log(coffeeOrders);

const firstTimeCustomer = coffeeOrdersEdits.getFirstTimeCustomer(
  coffeeOrders,
  "John"
);
console.log(firstTimeCustomer, "John");

coffeeOrdersEdits.findOrderExtras(coffeeOrders);

const mostOrdered = coffeeOrdersEdits.findMostOrdered(coffeeOrders);
console.log(mostOrdered);

const totalEarnings = coffeeOrdersEdits.getTotalEarnings(coffeeOrders);
console.log(totalEarnings);

const topThree = coffeeOrdersEdits.findTopThree(coffeeOrders);
console.log(topThree);

const orderByJane = coffeeOrdersEdits.janeRushOrder(coffeeOrders);
console.log(coffeeOrders);

const removedFirstOrder = coffeeOrdersEdits.removeFirstOrder(coffeeOrders);
console.log(removedFirstOrder);
const mostExpensiveCoffee = coffeeOrdersEdits.findMostExpensiveCoffee(
  coffeeOrders
);
console.log(mostExpensiveCoffee);

const discountAmount = coffeeOrdersEdits.applyDiscount(coffeeOrders);
console.log(discountAmount);
console.log("meow");

const updatedOrder = coffeeOrdersEdits.addCustomCoffee(coffeeOrders);
console.log(updatedOrder);
