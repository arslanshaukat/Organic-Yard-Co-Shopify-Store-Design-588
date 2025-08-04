import express from 'express';
import { body } from 'express-validator';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getFeaturedProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(
    protect,
    admin,
    [
      body('name').notEmpty().withMessage('Product name is required'),
      body('price').isNumeric().withMessage('Price must be a number'),
      body('description').notEmpty().withMessage('Description is required'),
      body('category').notEmpty().withMessage('Category is required'),
      body('countInStock').isInt({ min: 0 }).withMessage('Count in stock must be a positive number'),
    ],
    createProduct
  );

router.route('/top').get(getTopProducts);
router.route('/featured').get(getFeaturedProducts);

router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

export default router;