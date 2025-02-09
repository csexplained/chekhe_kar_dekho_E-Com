import express from 'express';
import { addBanner, deleteBanner, getBannersByUser } from '../controllers/Bannar.controller.js';
import multer from 'multer';
import { verifyAdminjwt } from '../middlewares/AdminAuth.middleware.js';

const router = express.Router();
const upload = multer({ dest: './Public/temp' });

router.post('/', verifyAdminjwt, upload.single('image'), addBanner);
router.delete('/:id', verifyAdminjwt, deleteBanner);
router.get('/', getBannersByUser);

export default router;