import { useCallback, useEffect, useState } from 'react';
import useCart from '@/features/cartStore';
import { TProductData } from '@/models';
import { getProduct as loadProduct } from '@/utils/data-utils';

export default function useProducts() {
  const cart = useCart((state) => state.cart);
  const [products, setProducts] = useState<TProductData[]>([]);

  const getProducts = useCallback(() => {
    const users = [] as TProductData[];
    cart.forEach(async (item) => {
      const product = await loadProduct(item.id);
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
