/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { TProductFullData } from '@/models';

type TCartItem = {
  id: string;
  quantity: number;
  product: TProductFullData;
};

type TCart = TCartItem[];

type TCartStore = {
  cart: TCart;
  addItem: (productData: TProductFullData, quantity: number) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeAll: () => void;
};

const useCart = create<TCartStore>()(
  devtools(
    immer((set, get) => ({
      cart: [] as TCart,

      increaseQuantity: (id: string) => {
        const productIndex = get().cart.findIndex((item) => item.id === id);
        return set((state) => {
          state.cart[productIndex].quantity += 1;
        });
      },

      decreaseQuantity: (id: string) => {
        const productIndex = get().cart.findIndex((item) => item.id === id);
        const item = get().cart.find((product) => product.id === id);

        if (item?.quantity === 1) {
          get().removeItem(id);
        } else {
          set((state) => {
            state.cart[productIndex].quantity -= 1;
          });
        }
      },

      addItem: (productData: TProductFullData, quantity: number) => {
        const productIndex = get().cart.findIndex(
          (item) => item.id === productData.slug
        );

        if (productIndex >= 0) {
          return get().increaseQuantity(productData.slug);
        }

        return set((state) => {
          state.cart.push({
            id: productData.slug,
            quantity,
            product: productData,
          });
        });
      },

      removeItem: (id: string) => {
        set((state) => {
          state.cart = state.cart.filter((item: TCartItem) => item.id !== id);
        });
      },

      removeAll: () => {
        set((state) => {
          state.cart = [];
        });
      },
    }))
  )
);
export default useCart;
