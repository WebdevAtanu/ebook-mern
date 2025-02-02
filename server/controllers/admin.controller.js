import {admin} from '../models/admin.model.js';
import {setCookie} from '../utils/cookie.js'

export const adminLogin = async(req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const find_admin = await admin.findOne({
            email
        });
        if (!find_admin) {
            return res.status(400).json({
                message: 'invalid credentials'
            })
        }
        if (password != find_admin.password) {
            return res.status(400).json({
                message: 'invalid credentials'
            })
        }
        setCookie(process.env.JWT_SECRET, find_admin, res);
    } catch (error) {
    	return res.status(500).json({
            message: 'server error',
            error: error.message
        })
    }
}

export const adminDetails = async (req,res) => {
	try{
		return res.status(201).json({
			message:true,
			data:{
				name:req.admin_details.name,
				email:req.admin_details.email
			}
		})
	}
	catch(error){
		return res.status(500).json({
            message: 'server error',
            error: error.message
        })
	}
}

export const adminLogout = (req, res) => {
    res.clearCookie('admin_token');
    res.json({
        message: 'Logged out successfully'
    });
};