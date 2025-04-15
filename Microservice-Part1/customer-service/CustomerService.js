const mongoose = require('mongoose');

// Định nghĩa schema cho Customer
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

// Tạo model từ schema
const Customer = mongoose.model('Customer', customerSchema);

// Lấy tất cả khách hàng
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();  // Lấy tất cả khách hàng từ MongoDB
    res.status(200).json(customers);  // Trả về danh sách khách hàng dưới dạng JSON
  } catch (err) {
    res.status(500).json({ error: err.message });  // Trả về lỗi nếu có
  }
};

// Tạo khách hàng mới
const createCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;

  const newCustomer = new Customer({
    name,
    email,
    phone,
    address
  });

  try {
    const savedCustomer = await newCustomer.save();  // Lưu khách hàng vào MongoDB
    res.status(201).json(savedCustomer);  // Trả về khách hàng mới đã lưu
  } catch (err) {
    res.status(500).json({ error: err.message });  // Trả về lỗi nếu có
  }
};

module.exports = { getCustomers, createCustomer };
