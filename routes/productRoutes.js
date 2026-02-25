import express from 'express';
import { addProductForm, createProduct, getAllProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/',getAllProduct);
router.get('/add',addProductForm);
router.post('/add',createProduct);

export default router;