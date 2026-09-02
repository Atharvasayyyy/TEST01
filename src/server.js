const express = require("express");

const app = express();
app.use(express.json());

const users = new Map([
  ["u1", { id: "u1", name: "Atharva", active: true, role: "user" }]
]);

const orders = new Map([
  ["o1", {
    id: "o1",
    userId: "u1",
    total: 1000,
    status: "paid",
    couponUsed: false,
    refundCount: 0
  }]
]);

function getUser(id) {
  return users.get(id);
}

function requireActiveUser(user) {
  return Boolean(user && user.active);
}

function getOrder(id) {
  return orders.get(id);
}

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/users/:id", (req, res) => {
  const user = getUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "user_not_found" });
  }

  if (!requireActiveUser(user)) {
    return res.status(403).json({ error: "user_inactive" });
  }

  return res.json({ id: user.id, name: user.name, role: user.role });
});

app.get("/orders/:id", (req, res) => {
  const order = getOrder(req.params.id);

  if (!order) {
    return res.status(404).json({ error: "order_not_found" });
  }

  return res.json(order);
});

app.get("/runtime-test-error", (req, res) => {
  throw new Error("AUTTER_RUNTIME_TEST_ERROR");
});

app.use((err, req, res, next) => {
  const autter = require("./instrument.cjs");
  if (autter) {
    autter.captureException(err, {
      "autter.runtime.test": "runtime-test-error",
      "autter.route": req.path
    });
  }

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({ error: "internal_server_error" });
});

app.post("/orders/:id/refund", (req, res) => {
  const order = getOrder(req.params.id);

  if (!order) {
    return res.status(404).json({ error: "order_not_found" });
  }

  if (order.status !== "paid") {
    return res.status(409).json({ error: "order_not_refundable" });
  }

  order.status = "refunded";
  order.refundCount += 1;

  return res.json({
    ok: true,
    orderId: order.id,
    refundCount: order.refundCount
  });
});

module.exports = {
  app,
  users,
  orders,
  getUser,
  requireActiveUser,
  getOrder
};

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => {
    console.log(`benchmark listening on ${port}`);
  });
}
