import express from 'express';
import multer from 'multer';
import {
    addMainBanner, deleteMainBanner, getMainBanners,
    addComboBanner, deleteComboBanner, getComboBanners,
    addDefinetlyBanner, deleteDefinetlyBanner, getDefinetlyBanners,
    addVarticalBanner, deleteVarticalBanner, getVarticalBanners
} from '../controllers/Bannar.controller.js';
import { verifyAdminjwt } from '../middlewares/AdminAuth.middleware.js';

const router = express.Router();
const upload = multer({ dest: './Public/temp' });

// Main Banner Routes
router.post('/main', verifyAdminjwt, upload.single('image'), addMainBanner);
router.delete('/main/:id', verifyAdminjwt, deleteMainBanner);
router.get('/main', getMainBanners);

// Combo Banner Routes
router.post('/combo', verifyAdminjwt, upload.single('image'), addComboBanner);
router.delete('/combo/:id', verifyAdminjwt, deleteComboBanner);
router.get('/combo', getComboBanners);

// Definitely Banner Routes
router.post('/definetly', verifyAdminjwt, upload.single('image'), addDefinetlyBanner);
router.delete('/definetly/:id', verifyAdminjwt, deleteDefinetlyBanner);
router.get('/definetly', getDefinetlyBanners);

// Vertical Banner Routes
router.post('/vertical', verifyAdminjwt, upload.single('image'), addVarticalBanner);
router.delete('/vertical/:id', verifyAdminjwt, deleteVarticalBanner);
router.get('/vertical', getVarticalBanners);

export default router;
