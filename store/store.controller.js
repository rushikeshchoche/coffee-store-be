const express = require("express");
const router = express.Router();
const userService = require("./store.service");

// routes
router.get("/prices", getPrices);
router.get("/payments", getPayments);
router.get("/orders", getOrders);

module.exports = router;

function getPrices(req, res, next) {
  userService
    .getPrices(req.query)
    .then((users) => res.json(users))
    .catch(next);
}
function getPayments(req, res, next) {
  userService
    .getPayments(req.query)
    .then((users) => res.json(users))
    .catch(next);
}

function getOrders(req, res, next) {
  userService
    .getOrders(req.query)
    .then((users) => res.json(users))
    .catch(next);
}
