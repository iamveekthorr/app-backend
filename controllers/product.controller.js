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
    res.status(500).json({
      message: 'success',
      error: err.message,
    });
    return next(new Error(err.message));
  }
};

exports.createProduct = async (req, res, next) => {
  const {
    date,
    access_alert,
    reversals,
    keystone,
    keystone_alert,
    access,
    total_pos,
    in_transfer,
    transfer,
    ex_ceo,
    ex_transport,
    ex_fuel,
    ex_other,
    goods_purchases,
    p_cash_balance,
    bank_alert,
    total_daily_expenses,
    sales_total,
    system_balance,
    difference,
    corrected_system_value,
    corrected_difference,
    notable_transactions,
    true_excess,
    shortage,
  } = req.body;

  // for validation: to check if the body of the product is empty
  const values = Object.values(req.body).map((el) => el);

  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      message: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    return next(new Error(err.message));
  }
};

exports.updateProduct = async (req, res, next) => {
  const { id: productId } = req.params;
  const {
    date,
    access_alert,
    reversals,
    keystone,
    keystone_alert,
    access,
    total_pos,
    in_transfer,
    transfer,
    ex_ceo,
    ex_transport,
    ex_fuel,
    ex_other,
    goods_purchases,
    p_cash_balance,
    bank_alert,
    total_daily_expenses,
    sales_total,
    system_balance,
    difference,
    corrected_system_value,
    corrected_difference,
    notable_transactions,
    true_excess,
    shortage,
  } = req.body;

  const product = await Product.findById(productId);

  if (!product) {
    return next(new Error('product not found'));
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    product.id,
    { $set: req.body },
    { new: true }
  );

  res.json({
    message: 'success',
    data: {
      updatedProduct,
    },
  });
};
