import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
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
    tags: {
        type: [String],
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: "https://github.com/WebdevAtanu/shopper-ecommerce/blob/main/server/public/noimg.png?raw=true"
    },
    pdf: {
        type: String,
    }
}, {
    timestamps: true
})

export const book = mongoose.model('book', bookSchema);