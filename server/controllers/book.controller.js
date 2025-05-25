import { book } from '../models/book.model.js';
import { uploadToCloudinary } from '../services/cloudinary.service.js';
import axios from 'axios';
export const addBook = async (req, res) => {
    try {
        const { title, description, genre, author, tags, price } = req.body;
        if (!title || !description || !genre || !author || !tags || !price) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }
        const tagsArray = tags.split(',').map(tag => tag.trim());
        const imageFilePath = req.files?.image?.[0]?.path;
        const pdfFilePath = req.files?.pdf?.[0]?.path;

        const imageUpload = imageFilePath
            ? await uploadToCloudinary(imageFilePath)
            : null;

        const pdfUpload = pdfFilePath
            ? await uploadToCloudinary(pdfFilePath)
            : null;

        const newBook = await book.create({
            title,
            description,
            genre,
            author,
            tags: tagsArray,
            price,
            image: imageUpload?.url || '',
            pdf: pdfUpload?.url || '',
        });
        console.log(newBook);
        res.status(200).json({
            message: 'Book added successfully',
            response: newBook,
        });
    } catch (error) {
        console.error('Error uploading files:', error);
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};

export const updateBook = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}

export const allBooks = async (req, res) => {
    try {
        let books = await book.find();
        res.status(200).json({
            message: 'books found',
            books: books
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}

export const getBook = async (req, res) => {
    try {
        let id = req.params.id;
        let theBook = await book.find({ _id: id });
        res.status(200).json({
            message: 'book found',
            book: theBook
        })
    }
    catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}