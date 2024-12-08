import express from 'express';
import { ProductController } from './product.controller';
import upload from '../../middlewares/multer';

const router = express.Router();

router.post('/', upload.single('images0'), ProductController.createProduct);

router.get('/', ProductController.getAllProduct);

router.get('/:id', ProductController.getSingleProduct);

router.delete('/:id', ProductController.deleteProduct);

router.put('/:id', ProductController.updateProduct);

export const ProductRouter = router;
