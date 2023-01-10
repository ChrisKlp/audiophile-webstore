export type TProductLoaderData = {
  images: TProductImagesGroup;
} & TProductData;

export type TProductData = {
  featured: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  features: string[];
  inTheBox: string[];
  related: string[];
};

export type TLayoutConfig = {
  transparentNav?: boolean;
  clean?: boolean;
};

export type TProductImageSizes = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type TProductImagesGroup = {
  product: TProductImageSizes;
  preview: TProductImageSizes;
  gallery: Record<string | number, TProductImageSizes>;
};
