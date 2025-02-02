import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    tags:{
        type:[String],
    },
    image: {
        type: String,
        default:"https://github.com/WebdevAtanu/shopper-ecommerce/blob/main/server/public/noimg.png?raw=true"
    }
}, {
    timestamps: true
})

export const book = mongoose.model('book', bookSchema);