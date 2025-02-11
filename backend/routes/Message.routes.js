import express from 'express';
import message from '../controllers/Message.controller.js';
import { verifyAdminjwt } from '../Middlewares/AdminAuth.middleware.js';
const router = express.Router();

router.post('/message',message.messageUpload);


export default router;