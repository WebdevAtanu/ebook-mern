import mongoose from 'mongoose';
const url = process.env.DB_URL;
const database = 'ebook';
const databaseConnect = () => {
    mongoose.connect(`${url}/${database}`)
        .then(() => {
            console.log('database connected');
        })
        .catch(error => {
            console.log('database connection error', error);
        })
}

export default databaseConnect;