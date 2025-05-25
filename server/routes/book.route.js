import express from 'express';
import { addBook, allBooks, getBook } from '../controllers/book.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const book_router = express.Router();
book_router.post(
    '/addbook',
    upload.fields([
        { name: 'image', maxCount: 1 },
        { name: 'pdf', maxCount: 1 }
    ]),
    addBook
);
book_router.get('/allbooks', allBooks)
book_router.get('/getbook/:id', getBook)

export default book_router;