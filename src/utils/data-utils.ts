import * as _ from 'lodash-es';
import {
  TProductData,
  TProductImagesGroup,
  TProductLoaderData,
} from '@/models';
import { getImageName, getKeyByValue } from './utils';

const productModules = import.meta.glob('@/data/*.json', { eager: true });
const imagesModules = import.meta.glob('@/assets/products/**/*', {
  eager: true,
});

enum ImageNameTypes {
  preview = 'image-category-page-preview',
  gallery = 'image-gallery',
  product = 'image-product',
}

enum ImageSizes {
  mobile,
  tablet,
  desktop,
}

function getImageSizePath(path: string, module: unknown) {
  if (
    module &&
    typeof module === 'object' &&
    'default' in module &&
    typeof module.default === 'string'
  ) {
    const imageSize = Object.keys(ImageSizes).find((size) =>
      path.match(`\\b/${size}/\\b`)
    );

    if (imageSize) {
      return { [imageSize]: module.default };
    }
  }
  return undefined;
}

export function getProductImages(productId: string) {
  const filteredImagesModules = Object.entries(imagesModules).filter(([key]) =>
    key.match(`\\b${productId}\\b`)
  );

  const images = filteredImagesModules.reduce((obj, [key, value]) => {
    const imageSizePath = getImageSizePath(key, value);
    const imageName = getImageName(key);
    const imageNameType = Object.values(ImageNameTypes).find((imgName) =>
      imageName?.match(`\\${imgName}\\b`)
    );
    if (!imageNameType || !imageName || !imageSizePath) return obj;

    const imageCategory = getKeyByValue(
      ImageNameTypes,
      imageNameType
    ) as keyof TProductImagesGroup;

    if (imageCategory === 'gallery') {
      _.merge(obj, { [imageCategory]: { [imageName]: imageSizePath } });
    } else {
      _.merge(obj, { [imageCategory]: imageSizePath });
    }

    return obj;
  }, {} as TProductImagesGroup);

  return images;
}

export function getProduct(productId?: string) {
  if (!productId) return new Error('Product not found');

  let product: TProductLoaderData;
  const productModule = Object.values(productModules).find((item) =>
    item &&
    typeof item === 'object' &&
    'slug' in item &&
    item.slug === productId
      ? item
      : false
  ) as TProductData;

  if (productModule) {
    const images = getProductImages(productId);
    product = { ...JSON.parse(JSON.stringify(productModule)), images };
    _.omit(product, 'default');
  }

  return new Promise<TProductLoaderData>((resolve, reject) => {
    if (product) {
      resolve(product);
    } else {
      reject(new Error('Product not found'));
    }
  });
}

export function getCategory(categoryId?: string) {
  if (!categoryId) return new Error('Category not found');

  const categoryProducts = [] as TProductLoaderData[];
  Object.values(productModules).forEach((item) => {
    if (
      item &&
      typeof item === 'object' &&
      'category' in item &&
      'slug' in item &&
      typeof item.slug === 'string' &&
      item.category === categoryId
    ) {
      const images = getProductImages(item.slug);
      const product = JSON.parse(JSON.stringify(item));

      delete product.default;

      categoryProducts.push({
        ...product,
        images,
      });
    }
  });

  return new Promise<TProductLoaderData[]>((resolve, reject) => {
    if (categoryProducts.length) {
      resolve(categoryProducts);
    } else {
      reject(new Error('Category not found'));
    }
  });
}
