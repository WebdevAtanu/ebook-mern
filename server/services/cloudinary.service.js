import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import mime from 'mime-types';
import { config } from 'dotenv';

config({ path: './config.env' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(localFilePath) {
  try {
    if (!localFilePath) return null;

    const mimeType = mime.lookup(localFilePath);
    let resourceType = 'auto';

    if (mimeType === 'application/pdf') {
      resourceType = 'raw'; // For PDFs
    } else if (mimeType && mimeType.startsWith('image/')) {
      resourceType = 'auto'; // For images
    }

    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: resourceType,
      // Optional: folder: 'uploads'
    });

    console.log('File uploaded with URL:', uploadResult.secure_url);
    fs.unlinkSync(localFilePath); // Delete local file after upload

    return uploadResult;
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
}
