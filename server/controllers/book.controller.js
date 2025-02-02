import {book} from '../models/book.model.js';
import {uploadToCloudinary} from '../services/cloudinary.service.js';
export const addBook = async (req,res) => {
	try{
    	const{title,genre,author,tags}=req.body;
    	let localFilePath = req.file?.path;
    	let upload = await uploadToCloudinary(localFilePath);
        let response = await book.create({
            title,
            genre,
            author,
            tags,
            image:upload.url
        })
    	res.status(200).json({
    		message:'book added',
    		response:response
    	})
	}
	catch(error){
		res.status(500).json({
			message:"server error",
			error:error.message
		})
	}
}

export const updateBook = async(req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}
 
export const bookDetails = async (req,res) => {
	try{

	}
	catch(error){

	}
}