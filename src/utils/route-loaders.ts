/* eslint-disable @typescript-eslint/no-throw-literal */
import { LoaderFunctionArgs } from 'react-router-dom';
import { getCategory, getProduct } from '@/utils/data-utils';

export async function productLoader({ params }: LoaderFunctionArgs) {
  try {
    return await getProduct(params.productId);
  } catch (error) {
    throw new Response('', {
      status: 404,
      statusText: error as string,
    });
  }
}

export async function categoryLoader({ params }: LoaderFunctionArgs) {
  try {
    return await getCategory(params.categoryId);
  } catch (error) {
    throw new Response('', {
      status: 404,
      statusText: error as string,
    });
  }
}
