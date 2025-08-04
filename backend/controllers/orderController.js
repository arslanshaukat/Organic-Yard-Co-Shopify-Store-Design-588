import asyncHandler from '../utils/asyncHandler.js';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';
import sendEmail from '../utils/sendEmail.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    subtotalPrice,
    shippingPrice,
    totalPrice,
    expressShipping,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    // Verify product prices and availability
    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      
      if (!product) {
        res.status(404);
        throw new Error(`Product not found: ${item.product}`);
      }
      
      if (product.price !== item.price) {
        res.status(400);
        throw new Error(`Product price has changed: ${product.name}`);
      }
      
      if (product.countInStock < item.qty) {
        res.status(400);
        throw new Error(`Not enough stock for ${product.name}`);
      }
    }

    // Create order
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      subtotalPrice,
      shippingPrice,
      totalPrice,
      expressShipping,
    });

    // Update product stock
    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      product.countInStock -= item.qty;
      await product.save();
    }

    const createdOrder = await order.save();

    // Send order confirmation email
    try {
      const message = `
        <h1>Order Confirmation</h1>
        <p>Thank you for your order!</p>
        <p>Order Number: ${createdOrder._id}</p>
        <h2>Order Details</h2>
        <ul>
          ${orderItems.map(item => `<li>${item.name} x ${item.qty} - $${item.price.toFixed(2)}</li>`).join('')}
        </ul>
        <p>Subtotal: $${subtotalPrice.toFixed(2)}</p>
        <p>Shipping: $${shippingPrice.toFixed(2)}</p>
        <p>Total: $${totalPrice.toFixed(2)}</p>
        <p>Shipping Method: ${expressShipping ? 'Express' : 'Standard'}</p>
      `;

      await sendEmail({
        to: req.user.email,
        subject: 'Order Confirmation - Organic Yard Co',
        html: message,
      });
    } catch (error) {
      console.error('Order confirmation email error:', error);
      // Don't block the order creation if email fails
    }

    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'firstName lastName email'
  );

  if (order) {
    // Check if the order belongs to the user or if the user is an admin
    if (order.user._id.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      res.status(401);
      throw new Error('Not authorized to view this order');
    }
    
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer ? req.body.payer.email_address : req.body.email_address,
    };

    const updatedOrder = await order.save();

    // Send payment confirmation email
    try {
      const message = `
        <h1>Payment Confirmation</h1>
        <p>Your payment for order #${updatedOrder._id} has been processed successfully.</p>
        <p>Thank you for shopping with Organic Yard Co!</p>
      `;

      await sendEmail({
        to: updatedOrder.user.email,
        subject: 'Payment Confirmation - Organic Yard Co',
        html: message,
      });
    } catch (error) {
      console.error('Payment confirmation email error:', error);
    }

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    order.status = 'Delivered';

    const updatedOrder = await order.save();

    // Send delivery confirmation email
    try {
      const message = `
        <h1>Delivery Confirmation</h1>
        <p>Your order #${updatedOrder._id} has been delivered.</p>
        <p>Thank you for shopping with Organic Yard Co!</p>
      `;

      await sendEmail({
        to: updatedOrder.user.email,
        subject: 'Delivery Confirmation - Organic Yard Co',
        html: message,
      });
    } catch (error) {
      console.error('Delivery confirmation email error:', error);
    }

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  const { status } = req.body;

  if (order) {
    order.status = status;
    
    // If status is Delivered, also update isDelivered
    if (status === 'Delivered') {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
    }
    
    // If status is Cancelled, restore stock
    if (status === 'Cancelled' && order.status !== 'Cancelled') {
      for (const item of order.orderItems) {
        const product = await Product.findById(item.product);
        if (product) {
          product.countInStock += item.qty;
          await product.save();
        }
      }
    }

    const updatedOrder = await order.save();

    // Send status update email
    try {
      const message = `
        <h1>Order Status Update</h1>
        <p>Your order #${updatedOrder._id} has been updated to: ${status}</p>
        <p>Thank you for shopping with Organic Yard Co!</p>
      `;

      await sendEmail({
        to: updatedOrder.user.email,
        subject: `Order Status Update - ${status} - Organic Yard Co`,
        html: message,
      });
    } catch (error) {
      console.error('Status update email error:', error);
    }

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order tracking number
// @route   PUT /api/orders/:id/tracking
// @access  Private/Admin
const updateOrderTrackingNumber = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  const { trackingNumber } = req.body;

  if (order) {
    order.trackingNumber = trackingNumber;
    
    if (order.status === 'Processing') {
      order.status = 'Shipped';
    }

    const updatedOrder = await order.save();

    // Send tracking info email
    try {
      const message = `
        <h1>Your Order Has Shipped</h1>
        <p>Good news! Your order #${updatedOrder._id} is on its way.</p>
        <p>Tracking Number: ${trackingNumber}</p>
        <p>You can track your package using the shipping carrier's website.</p>
        <p>Thank you for shopping with Organic Yard Co!</p>
      `;

      await sendEmail({
        to: updatedOrder.user.email,
        subject: 'Your Order Has Shipped - Organic Yard Co',
        html: message,
      });
    } catch (error) {
      console.error('Tracking info email error:', error);
    }

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.page) || 1;
  
  const keyword = req.query.keyword
    ? { _id: { $regex: req.query.keyword, $options: 'i' } }
    : {};
  
  const statusFilter = req.query.status
    ? { status: req.query.status }
    : {};
  
  const dateFilter = {};
  if (req.query.startDate) {
    dateFilter.createdAt = { $gte: new Date(req.query.startDate) };
  }
  if (req.query.endDate) {
    if (dateFilter.createdAt) {
      dateFilter.createdAt.$lte = new Date(req.query.endDate);
    } else {
      dateFilter.createdAt = { $lte: new Date(req.query.endDate) };
    }
  }
  
  // Combine all filters
  const filter = {
    ...keyword,
    ...statusFilter,
    ...dateFilter,
  };
  
  // Handle sorting
  let sortOption = {};
  if (req.query.sortBy) {
    const sortField = req.query.sortBy;
    const sortDirection = req.query.sortOrder === 'desc' ? -1 : 1;
    sortOption = { [sortField]: sortDirection };
  } else {
    sortOption = { createdAt: -1 }; // Default sort by newest
  }

  const count = await Order.countDocuments(filter);
  const orders = await Order.find(filter)
    .populate('user', 'firstName lastName email')
    .sort(sortOption)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    orders,
    page,
    pages: Math.ceil(count / pageSize),
    totalOrders: count,
  });
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  updateOrderStatus,
  updateOrderTrackingNumber,
};