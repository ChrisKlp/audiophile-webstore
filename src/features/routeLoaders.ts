/* eslint-disable @typescript-eslint/no-throw-literal */
import { LoaderFunctionArgs } from 'react-router-dom';
import { getCategory, getProduct } from '@/utils/data-utils';
import { TLayoutConfig, TProductFullData } from '@/models';

export async function productLoader({ params }: LoaderFunctionArgs) {
  try {
    const product = await getProduct(params.productId);
    const related = [] as TProductFullData[];

    if ('related' in product) {
      product.related.forEach(async (slug) => {
        const relatedProduct = await getProduct(slug);
        if ('shortName' in relatedProduct) related.push(relatedProduct);
      });
    }

    return { product, related };
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

export async function cartProductLoader(slug: string) {
  try {
    return await getProduct(slug);
  } catch (error) {
    throw new Response('', {
      status: 404,
      statusText: error as string,
    });
  }
}

export function layoutLoader(config: TLayoutConfig) {
  return { layoutConfig: { ...config } };
}
