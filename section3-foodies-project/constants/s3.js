import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export const S3_URL_PREFIX = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/foodies`;