import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/Products.controller.js';
import { verifyAdminjwt } from '../middlewares/AdminAuth.middleware.js';
import multer from 'multer';

const upload = multer({ dest: './Public/temp' });
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin routes
router.post('/',
    verifyAdminjwt,
    upload.fields([
        { name: 'images', maxCount: 7 },
        { name: 'extraimages', maxCount: 4 }
    ]),
    createProduct
);

router.put('/:id',
    verifyAdminjwt,
    upload.fields([
        { name: 'images', maxCount: 5 },
        { name: 'extraimages', maxCount: 5 }
    ]),
    updateProduct
);

router.delete('/:id', verifyAdminjwt, deleteProduct);

export default router;