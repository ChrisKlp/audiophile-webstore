import * as _ from 'lodash-es';
import { TCategoryLoaderData, TProductData } from '@/models';

const productModules = import.meta.glob('@/data/*.json', { eager: true });

export function getProduct(productId?: string) {
  if (!productId) return new Error('Product not found');

  const product = Object.values(productModules).find((item) =>
    item &&
    typeof item === 'object' &&
    'slug' in item &&
    item.slug === productId
      ? item
      : undefined
  ) as (TProductData & { default: TProductData }) | undefined;

  let parsedProduct: TProductData | undefined;

  if (product) {
    parsedProduct = JSON.parse(JSON.stringify(product.default));
  }

  return new Promise<TProductData>((resolve, reject) => {
    if (parsedProduct) {
      resolve(parsedProduct);
    } else {
      reject(new Error('Product not found'));
    }
  });
}

export function getCategory(categoryId?: string) {
  if (!categoryId) return new Error('Category not found');

  const categoryProducts = [] as TCategoryLoaderData;

  Object.values(productModules).forEach((item) => {
    if (
      item &&
      typeof item === 'object' &&
      'category' in item &&
      item.category === categoryId &&
      'default' in item
    ) {
      const product = JSON.parse(JSON.stringify(item.default));

      categoryProducts.push(product);
    }
  });

  return new Promise<TCategoryLoaderData>((resolve, reject) => {
    if (categoryProducts.length) {
      resolve(categoryProducts);
    } else {
      reject(new Error('Category not found'));
    }
  });
}
