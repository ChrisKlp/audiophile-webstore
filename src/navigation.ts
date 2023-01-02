export const routes = {
  home: '/',
  category: '/category',
  product: '/product',
  checkout: '/checkout',
};

export const navigation = [
  {
    name: 'home',
    path: routes.home,
  },
  {
    name: 'headphones',
    path: `${routes.category}/headphones`,
  },
  {
    name: 'speakers',
    path: `${routes.category}/speakers`,
  },
  {
    name: 'earphones',
    path: `${routes.category}/earphones`,
  },
];

export const productsPaths = {
  xx59: `${routes.product}/xx59-headphones`,
  xx99_m1: `${routes.product}/xx99-mark-one-headphones`,
  xx99_m2: `${routes.product}/xx99-mark-two-headphones`,
  zx9: `${routes.product}/zx9-speaker`,
  zx7: `${routes.product}/zx7-speaker`,
  yx1: `${routes.product}/yx1-earphones`,
};
