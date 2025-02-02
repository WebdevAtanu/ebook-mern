import express from 'express';
import {adminLogin,adminDetails,adminLogout} from '../controllers/admin.controller.js';
import {adminAuth,loginRateLimiter} from '../middlewares/admin.middleware.js';

const admin_router = express.Router();
admin_router.post('/login', loginRateLimiter, adminLogin);
admin_router.get('/details', adminAuth, adminDetails);
admin_router.post('/logout', adminLogout);

export default admin_router;