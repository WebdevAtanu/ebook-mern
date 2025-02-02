import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

export async function uploadToCloudinary(localFilePath) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET //
    });

    try {
        if (!localFilePath) return null;
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log('file uploaded with url ', uploadResult.url);
        fs.unlinkSync(localFilePath);
        return uploadResult;

    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log(error);
    }

    // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url('demo', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });
    // console.log(autoCropUrl);
}