import {book} from '../models/book.model.js';
import {uploadToCloudinary} from '../services/cloudinary.service.js';
export const addBook = async (req,res) => {
	try{
    	const{title,description,genre,author,tags,price}=req.body;
    	let tagsArray=tags.split(',');
    	let localFilePath = req.file?.path;
    	let upload = await uploadToCloudinary(localFilePath);
        let response = await book.create({
            title,
            description,
            genre,
            author,
            tags:tagsArray,
            price,
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

    } 
    catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}
 
export const allBooks = async (req,res) => {
	try{
		let books= await book.find();
		res.status(200).json({
    		message:'books found',
    		books:books
    	})
	}
	catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}

export const getBook = async (req,res) => {
    try{
        let id=req.params.id;
        let theBook= await book.find({_id:id});
        res.status(200).json({
            message:'book found',
            book:theBook
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}