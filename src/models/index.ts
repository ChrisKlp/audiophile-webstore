export type TProductLoaderData = {
  product: TProductFullData;
  related: TProductFullData[];
};

export type TCategoryLoaderData = TProductFullData[];

export type TProductFullData = TProductData & {
  images: TProductImagesGroup;
};

export type TProductData = {
  featured: string;
  name: string;
  shortName: string;
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
