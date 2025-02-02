import {admin} from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';

export const adminAuth = async(req, res, next)=> {
    try {
        const {
            admin_token
        } = req.cookies;
        if (!admin_token) {
            return res.status(401).json({
                message: 'admin not logged in'
            })
        } else {
            const token_decode = jwt.verify(admin_token, process.env.JWT_SECRET);
            req.admin_details = await admin.findById(token_decode.id);
            next();
        }
    } catch (e) {
        return res.status(500).json({
            message: 'server error',
            error: e.message
        })
    }
}

export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // Limit each IP to 5 requests
    message: {
        message: 'Too many login attempts, please try again later'
    }
});