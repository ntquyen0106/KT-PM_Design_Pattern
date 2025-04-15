const mongoose = require('mongoose');

// Định nghĩa schema cho Order
const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Tạo model từ schema
const Order = mongoose.model('Order', orderSchema);

// Lấy tất cả đơn hàng
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customerId').populate('productId');  // Populate customer và product thông qua ID
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tạo đơn hàng mới
const createOrder = async (req, res) => {
  const { customerId, productId, quantity } = req.body;

  const newOrder = new Order({
    customerId,
    productId,
    quantity
  });

  try {
    const savedOrder = await newOrder.save();  // Lưu đơn hàng vào MongoDB
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getOrders, createOrder };
