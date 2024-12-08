import express from 'express';
import { ProductController } from './product.controller';
import multer, { Multer } from 'multer';

const upload: Multer = multer();
const router = express.Router();

router.post('/', upload.any(), ProductController.createProduct);

router.get('/', ProductController.getAllProduct);

router.get('/:id', ProductController.getSingleProduct);

router.delete('/:id', ProductController.deleteProduct);

router.put('/:id', ProductController.updateProduct);

export const ProductRouter = router;
