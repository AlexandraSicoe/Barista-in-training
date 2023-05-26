console.log("verificare");

var coffeeOrders = require("./coffeeShopData.json");
var coffeeOrdersEdits = require("./coffeeFunctions.js");

console.log(coffeeOrders);

const firstTimeCustomer = coffeeOrdersEdits.getFirstTimeCustomer(
  coffeeOrders,
  "Ionut"
);
console.log(firstTimeCustomer, "Ionut");

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

const updatedOrders = coffeeOrdersEdits.addCustomCoffee(coffeeOrders);
console.log(updatedOrders);

const discountAmount = coffeeOrdersEdits.applyDiscount(coffeeOrders);
console.log(discountAmount);
