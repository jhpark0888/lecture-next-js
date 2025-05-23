import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';
import { S3_URL_PREFIX } from '@/constants/s3';

const s3 = new S3({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

 
const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug =  slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const pathKey = `foodies/${fileName}`;
    const bufferedImage = await meal.image.arrayBuffer();

    // // 로컬 파일 시스템에 파일 저장
    // const stream = fs.createWriteStream(`public/images/${fileName}`);

    // stream.write(Buffer.from(bufferedImage), (error) => {
    //     if (error) {
    //         throw new Error('Saving image Failed');
    //     }
    // });
    
    // meal.image = `/images/${fileName}`;

    // s3에 파일 저장
    s3.putObject({
        Bucket: process.env.S3_BUCKET,
        Key: pathKey,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
    })

    meal.image = `${S3_URL_PREFIX}/${pathKey}`;

    db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )    
    `).run(meal);
}   