import { useCallback, useEffect, useState } from 'react';
import useCart from '@/features/cartStore';
import { cartProductLoader } from '@/features/routeLoaders';
import { TProductFullData } from '@/models';

export default function useProducts() {
  const cart = useCart((state) => state.cart);
  const [products, setProducts] = useState<TProductFullData[]>([]);

  const getProducts = useCallback(() => {
    const users = [] as TProductFullData[];
    cart.forEach(async (item) => {
      const product = await cartProductLoader(item.id);
      if (!(product instanceof Error)) {
        users.push(product);
      }
    });
    setProducts(users);
  }, [cart]);

  function getProduct(id: string) {
    return products.find((prod) => prod.slug === id);
  }

  function getItemPrice(id: string) {
    return products.find((product) => product.slug === id)?.price;
  }

  function getTotal() {
    return cart.reduce((total, item) => {
      const price = getItemPrice(item.id);
      if (price) {
        return total + price * item.quantity;
      }
      return 0;
    }, 0);
  }

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { getProduct, getTotal };
}
