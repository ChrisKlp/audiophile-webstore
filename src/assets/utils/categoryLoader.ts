/* eslint-disable @typescript-eslint/no-throw-literal */
import { LoaderFunctionArgs } from 'react-router-dom';
import { TProductData } from '@/models';

const modules = import.meta.glob('@/data/*.json');

async function getCategory(categoryId?: string) {
  if (!categoryId) return new Error('Category not found');

  const categoryProducts = [] as TProductData[];

  await Promise.all(
    Object.keys(modules).map((path) =>
      modules[path]().then((mod) => {
        if (
          mod &&
          typeof mod === 'object' &&
          'category' in mod &&
          mod.category === categoryId
        ) {
          categoryProducts.push(JSON.parse(JSON.stringify(mod)));
        }
      })
    )
  );

  return new Promise<TProductData[]>((resolve, reject) => {
    if (categoryProducts.length) {
      resolve(categoryProducts);
    } else {
      reject(new Error('Category not found'));
    }
  });
}

async function categoryLoader({ params }: LoaderFunctionArgs) {
  try {
    return await getCategory(params.categoryId);
  } catch (error) {
    throw new Response('', {
      status: 404,
      statusText: error as string,
    });
  }
}

export default categoryLoader;
