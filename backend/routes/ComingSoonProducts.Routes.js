import express from 'express';
import {
    createProduct,
    getAllProducts,
    deleteProduct
} from '../controllers/ComingProducts.controller.js';
import { verifyAdminjwt } from '../Middlewares/AdminAuth.middleware.js';
import multer from 'multer';

const upload = multer({ dest: './Public/temp' });
const router = express.Router();

router.get('/', getAllProducts);


// Admin routes
router.post('/',
    verifyAdminjwt,
    upload.fields([
        { name: 'images', maxCount: 2 },
    ]),
    createProduct
);

router.delete('/:id', verifyAdminjwt, deleteProduct);

export default router;