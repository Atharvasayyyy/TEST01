const test = require("node:test");
const assert = require("node:assert/strict");

const {
  users,
  orders,
  getUser,
  requireActiveUser
} = require("../src/server");

test("existing user can be loaded", () => {
  assert.equal(getUser("u1").name, "Atharva");
});

test("inactive users are not allowed", () => {
  const user = users.get("u1");
  assert.equal(requireActiveUser(user), true);
});

test("baseline order is paid and unused for refund", () => {
  const order = orders.get("o1");
  assert.equal(order.status, "paid");
  assert.equal(order.refundCount, 0);
});
