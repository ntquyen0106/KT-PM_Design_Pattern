const express = require('express');
const mongoose = require('mongoose');
const { getProducts, createProduct } = require('./ProductService');

const app = express();
const port = 3001;

// Lấy MONGO_URI từ environment variables
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/productDB';

// Kết nối MongoDB (cập nhật không cần các tùy chọn deprecated)
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

// Các API để lấy và tạo sản phẩm
app.get('/products', getProducts);
app.post('/products/create', createProduct);

// Khởi động server
app.listen(port, () => {
  console.log(`Product Service running at http://localhost:${port}`);
});
