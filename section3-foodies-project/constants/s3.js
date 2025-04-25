require('dotenv').config();

export const S3_URL_PREFIX = `https://${process.env.S3_BUCKET}.s3.amazonaws.com`;
