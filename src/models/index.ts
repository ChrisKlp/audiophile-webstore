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
