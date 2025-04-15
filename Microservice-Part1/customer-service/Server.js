const express = require('express');
const { getCustomers, createCustomer } = require('./CustomerService');

const app = express();
const port = 3003;

app.use(express.json());

app.get('/customers', getCustomers);
app.post('/customers', createCustomer);

app.listen(port, () => {
  console.log(`Customer Service running at http://localhost:${port}`);
});
