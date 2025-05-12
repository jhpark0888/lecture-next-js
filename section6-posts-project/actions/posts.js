'use server';

import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { redirect } from 'next/navigation';
import { uploadImage } from '@/lib/s3';
import { revalidatePath } from 'next/cache';

export async function createPost(prevState, formData) {
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let errors = [];

    if (!title || title.trim().length === 0) {
      errors.push('Title is required.');
    }

    if (!content || content.trim().length === 0) {
      errors.push('Content is required.');
    }

    if (!image && image.size > 0) {
      errors.push('Image is required.');
    }

    if (errors.length > 0) {
      return { errors };
    }

    let imageUrl;

    try {
        imageUrl = await uploadImage(image);
    } catch (error) {
        throw new Error(
            'Image upload failed, post was not created. Prease try again later.'
        );
    }

    await storePost({
      imageUrl: imageUrl,
      title,
      content,
      userId: 1
    });

    // NextJS는 빌드할 때 동적 페이지 및 동적 세그먼트를 제외한 모든 페이지들을 사전렌더링한 후 캐싱한다.
    // 따라서 데이터가 변경된 후 특정 페이지를 최신화하기 위해서는 NextJS에게 특정 페이지에 대해 재검증을 요청 해야한다.
    revalidatePath('/', 'layout');
    redirect('/feed');
  }

  export async function togglePostLikeStatus(postId) {
    updatePostLikeStatus(postId, 2);
    // NextJS는 기본적으로 강력한 캐시를 적용한다.
    // 따라서 데이터가 변경된 후 특정 페이지를 최신화하기 위해서는 NextJS에게 특정 페이지에 대해 재검증을 요청 해야한다.
    revalidatePath('/', 'layout');
  }