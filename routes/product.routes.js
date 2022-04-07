const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProductById)
  .patch(productController.updateProduct)
  .delete(productController.deleteProductById);

module.exports = router;
