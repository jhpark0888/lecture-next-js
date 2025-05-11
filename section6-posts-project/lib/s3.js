import { S3 } from "@aws-sdk/client-s3";

if (!process.env.S3_BUCKET) {
    throw new Error('S3_BUCKET is not set');
}

if (!process.env.AWS_ACCESS_KEY_ID) {
    throw new Error('AWS_ACCESS_KEY_ID is not set');
}

if (!process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error('AWS_SECRET_ACCESS_KEY is not set');
}

const S3_URL_PREFIX = `https://${process.env.S3_BUCKET}.s3.amazonaws.com`;

const s3 = new S3({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

export async function uploadImage(image) {
    const extension = image.name.split('.').pop();
    const fileName = `postImage_${new Date().getTime()}.${extension}`;
    const pathKey = `posts/${fileName}`;
    const bufferedImage = await image.arrayBuffer();

    await s3.putObject({
        Bucket: process.env.S3_BUCKET,
        Key: pathKey,
        Body: Buffer.from(bufferedImage),
        ContentType: image.type,
    })

    return `${S3_URL_PREFIX}/${pathKey}`;
}