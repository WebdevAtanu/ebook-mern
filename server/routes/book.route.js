import express from 'express';
import {addBook,bookDetails} from '../controllers/book.controller.js';
import {upload} from '../middlewares/multer.middleware.js';

const book_router = express.Router();
book_router.post('/addbook', upload.single('image'), addBook)
book_router.get('/details', bookDetails)

export default book_router;