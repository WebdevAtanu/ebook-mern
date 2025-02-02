import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv';
import book_router from './routes/book.route.js';
import admin_router from './routes/admin.route.js';
import {upload} from './middlewares/multer.middleware.js';
import {uploadToCloudinary} from './services/cloudinary.service.js';

config({
    path: './config.env'
})
const app = express();
app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'server running'
    })
})

//multer testing
app.post('/upload', upload.single('image'), async function(req, res) {
    let localFilePath = req.file.path;
    let response = await uploadToCloudinary(localFilePath);
    res.json({
        message: response
    })
})

app.use('/api/book',book_router);
app.use('/api/admin',admin_router);

export default app;