const Product = require('../models/product.models');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      message: 'success',
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    return next(new Error(err.message));
  }
};

exports.createProduct = async (req, res, next) => {
  const {} = req.body;
};
