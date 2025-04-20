const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8083;

app.use(bodyParser.json());

// API cho giao hàng
app.post('/shipments', (req, res) => {
    const { orderId, address } = req.body;
    res.status(200).json({ status: 'Shipment created', orderId, address });
});

app.listen(port, () => {
    console.log(`Shipping service listening at http://localhost:${port}`);
});
