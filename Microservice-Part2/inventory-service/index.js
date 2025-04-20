const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8082;

app.use(bodyParser.json());

// API cho quản lý tồn kho
app.post('/inventory/update', (req, res) => {
    const { productId, quantity } = req.body;
    // Cập nhật tồn kho ở đây
    res.status(200).json({ status: 'Inventory updated', productId, quantity });
});

app.listen(port, () => {
    console.log(`Inventory service listening at http://localhost:${port}`);
});
