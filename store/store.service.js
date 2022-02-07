const orders = require("data/orders.json");
const payments = require("data/payments.json");
const prices = require("data/prices.json");

module.exports = {
  getPrices,
  getPayments,
  getOrders,
};

function getPrices() {
  return new Promise(function (resolve) {
    resolve(prices);
  });
}

function getPayments() {
  return new Promise(function (resolve) {
    resolve(payments);
  });
}

function getOrders() {
  return new Promise(function (resolve) {
    resolve(orders);
  });
}
