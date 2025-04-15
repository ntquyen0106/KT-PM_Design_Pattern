const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Trường này là bắt buộc
  },
  price: {
    type: Number,
    required: true,  // Trường này là bắt buộc
    min: 0,          // Giá không được nhỏ hơn 0
  },
  description: {
    type: String,
    required: true,  // Trường này là bắt buộc
  },
  stock: {
    type: Number,
    required: true,  // Trường này là bắt buộc
    min: 0,          // Tồn kho không thể âm
  },
  category: {
    type: String,
    required: true,  // Trường này là bắt buộc
  },
  brand: {
    type: String,
    required: true,  // Trường này là bắt buộc
  },
}, { timestamps: true });  // Tự động thêm thời gian tạo và cập nhật

// Tạo model từ schema
const Product = mongoose.model('Product', productSchema);

// Lấy tất cả sản phẩm
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();  // Lấy tất cả sản phẩm
    res.status(200).json(products);         // Trả về danh sách sản phẩm
  } catch (err) {
    res.status(500).json({ error: err.message });  // Trả về lỗi nếu có
  }
};

// Tạo sản phẩm mới
const createProduct = async (req, res) => {
  const { name, price, description, stock, category, brand } = req.body;

  // Kiểm tra xem tất cả thông tin cần thiết có được cung cấp không
  if (!name || !price || !description || !stock || !category || !brand) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newProduct = new Product({
    name,
    price,
    description,
    stock,
    category,
    brand,
  });

  try {
    // Lưu sản phẩm vào MongoDB
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);  // Trả về sản phẩm mới
  } catch (err) {
    res.status(500).json({ error: err.message });  // Trả về lỗi nếu có
  }
};

module.exports = { getProducts, createProduct };
