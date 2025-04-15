const express = require('express');
const { getOrders, createOrder } = require('./OrderService');

const app = express();
const port = 3002;

app.use(express.json());

app.get('/orders', getOrders);
app.post('/orders', createOrder);

app.listen(port, () => {
  console.log(`Order Service running at http://localhost:${port}`);
});
