import express from 'express';
import CategoryController from '../controllers/Category.controller.js';
import { verifyAdminjwt } from '../middlewares/AdminAuth.middleware.js';


const router = express.Router();

// router.get('/categories', CategoryController.getAllCategories);
// router.get('/categories/:id', CategoryController.getCategoryById);

// protected routes for admin  access only
router.post('/categories', CategoryController.createCategory);
router.get('/categories',CategoryController.getAllCategoryData)
router.get('/categories/:categoryId',CategoryController.getCategoryData);
router.put('/categories/:id', verifyAdminjwt, CategoryController.updateCategory);
router.delete('/categories/:id', verifyAdminjwt, CategoryController.deleteCategory);

export default router;