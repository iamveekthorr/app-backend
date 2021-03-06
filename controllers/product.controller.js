const Product = require('../models/product.models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json({
    message: 'success',
    data: {
      products,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const values = { ...req.body };

  // Check if a field is empty
  // Object.values(values).forEach((value) => {
  //   if (value === ' ') {
  //     return next(new AppError(`${values[value]} is not to be empty`, 400));
  //   }
  // });

  const product = await Product.create(values);
  return res.status(200).json({
    message: 'success',
    data: {
      product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const { id: productId } = req.params;

  const product = await await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  });

  // if product is not found, then this will run
  if (!product) {
    return next(new AppError('product not found', 404));
  }

  res.status(201).json({
    message: 'success',
    data: {
      product,
    },
  });
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const { id } = req.param;

  const product = await Product.findById(id);

  if (!product) return next(new AppError('Product not found', 404));

  res.status(200).json({
    status: 'success',
    product,
  });
});

exports.deleteProductById = catchAsync(async (req, res, next) => {
  const { id } = req.param;

  const product = await Product.findById(id);

  if (!product) return next(new AppError('Product not found', 404));

  res.status(200).json({
    status: 'success',
  });
});
