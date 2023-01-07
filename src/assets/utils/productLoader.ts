/* eslint-disable @typescript-eslint/no-throw-literal */
import { LoaderFunctionArgs } from 'react-router-dom';
import { TProductData } from '@/models';

const modules = import.meta.glob('@/data/*.json');

function getProduct(productId?: string) {
  if (!productId) return new Error('Product not found');

  const module = Object.keys(modules).find((path) =>
    Boolean(path.match(`\\b${productId}\\b`))
  );

  return new Promise<TProductData>((resolve, reject) => {
    if (module) {
      modules[module]().then((mod) => {
        resolve(JSON.parse(JSON.stringify(mod)));
      });
    } else {
      reject(new Error('Product not found'));
    }
  });
}

async function productLoader({ params }: LoaderFunctionArgs) {
  try {
    return await getProduct(params.productId);
  } catch (error) {
    throw new Response('', {
      status: 404,
      statusText: error as string,
    });
  }
}

export default productLoader;
