/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TCartItem = {
  id: string;
  quantity: number;
};

type TCart = TCartItem[];

type TCartStore = {
  cart: TCart;
  addItem: (productSlug: string, quantity: number) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeAll: () => void;
};

const useCart = create<TCartStore>()(
  devtools(
    immer((set, get) => ({
      cart: [
        {
          id: 'xx59-headphones',
          quantity: 1,
        },
        {
          id: 'xx59-headphones',
          quantity: 1,
        },
        {
          id: 'xx59-headphones',
          quantity: 1,
        },
        {
          id: 'xx59-headphones',
          quantity: 1,
        },
      ] as TCart,

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

      addItem: (productSlug: string, quantity: number) => {
        const productIndex = get().cart.findIndex(
          (item) => item.id === productSlug
        );

        if (productIndex >= 0) {
          return set((state) => {
            state.cart[productIndex].quantity += quantity;
          });
        }

        return set((state) => {
          state.cart.push({
            id: productSlug,
            quantity,
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
