const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route('/:id').get().patch(productController.updateProduct).delete();

module.exports = router;
