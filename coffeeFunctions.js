const getFirstTimeCustomer = (orders, customerName) => {
  var howManyTimes = 0;
  for (let i = 0; i < orders.length; i++) {
    howManyTimes =
      orders[i].customerName == customerName ? howManyTimes + 1 : howManyTimes;
  }
  return howManyTimes > 1 ? false : true;
};

const findOrderExtras = (orders) => {
  var extraOrders = [];
  orders.forEach((order) => {
    if (order.extras.length > 3) {
      extraOrders.push(order);
    }
  });
  console.log(extraOrders);
  var extraOrdersCustomers = [];
  extraOrders.forEach((order) => {
    // if (extraOrdersCustomers.includes(order.customerName)) {
    // } else {
    //   extraOrdersCustomers.push(order.customerName);
    // }

    if (!extraOrdersCustomers.includes(order.customerName))
      extraOrdersCustomers.push(order.customerName);
  });
  console.log(extraOrdersCustomers);
};

const findMostOrdered = (orders) => {
  const coffeeTypeCount = orders.reduce((count, order) => {
    const { coffeeType } = order;
    count[coffeeType] = (count[coffeeType] || 0) + 1;
    // count[coffeeType] = count[coffeeType] ? order[coffeeType] + 1 : 1;

    return count;
  }, {});

  const mostOrderedCoffee = Object.keys(coffeeTypeCount).reduce((a, b) =>
    coffeeTypeCount[a] > coffeeTypeCount[b] ? a : b
  );
  return mostOrderedCoffee;
};

const getTotalEarnings = (orders) => {
  const totalEarnings = orders.reduce((sum, order) => sum + order.price, 0);
  return totalEarnings;
};
const findTopThree = (orders) => {
  orders.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  });
  var topTrei = [
    orders[orders.length - 1],
    orders[orders.length - 2],
    orders[orders.length - 3],
  ];
  return topTrei;
};

const janeRushOrder = (orders) => {
  var newOrder = {
    orderID: "ORD021",
    customerName: "Jane",
    coffeeType: "Cappuccino",
    extras: ["almond milk"],
    price: 4,
  };
  orders.unshift(newOrder);
  return orders;
};

const removeFirstOrder = (orders) => {
  orders.shift();
  if (orders.length > 0) {
    const nextOrder = orders[0];
    return nextOrder;
  }
};

const findMostExpensiveCoffee = (orders) => {
  mostExpensive = orders.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  });
  return mostExpensive[orders.length - 1];
};

const applyDiscount = (orders) => {
  var sum = 0;
  orders.forEach((order) => {
    order.price = order.price * 0.2;
    sum += order.price;
  });
  return sum;
};

// const addCustomCoffee = (orders) => {
//   var customType = "Caramel Macchiato";
//   var customPrice = 5;
//   updatedOrder = orders.forEach((order) => {
//     if (order.customerName === "Alex") {
//       order.coffeeType = customType;
//       order.price = customPrice;
//     }
//   });
//   return orders;
// };

const addCustomCoffee = (orders) => {
  var customExtra = "sugar";
  orders.forEach((order) => {
    if (order.customerName === "Alex") {
      order.extras.push(customExtra);
      order.price += 5;
    }
  });
  return orders;
};
module.exports = {
  getFirstTimeCustomer,
  findOrderExtras,
  findMostOrdered,
  getTotalEarnings,
  findTopThree,
  janeRushOrder,
  removeFirstOrder,
  findMostExpensiveCoffee,
  applyDiscount,
  addCustomCoffee,
};
