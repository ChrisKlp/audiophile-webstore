export type TProductLoaderData = {
  product: TProductData;
  related: TProductData[];
};

export type TCategoryLoaderData = TProductData[];

export type TProductData = {
  new: boolean;
  name: string;
  shortName: string;
  cartName: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  features: string[];
  includes: {
    quantity: number;
    item: string;
  }[];
  related: string[];
  images: {
    cart: string;
    category: TProductImageSizes;
    product: TProductImageSizes;
    gallery: Record<string | number, TProductImageSizes>;
  };
};

export type TLayoutConfig = {
  transparentNav?: boolean;
  removeAbout?: boolean;
};

export type TProductImageSizes = {
  mobile: string;
  tablet: string;
  desktop: string;
};
