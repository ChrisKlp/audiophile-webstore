/* eslint-disable react-hooks/exhaustive-deps */
import { twMerge } from 'tailwind-merge';
import useCart from '@/features/cartStore';
import useProducts from '@/hooks/useProducts';
import { formatPrice } from '@/utils/utils';

type Props = {
  className?: string;
};

export default function Summary({ className }: Props) {
  const cart = useCart((state) => state.cart);
  const { getTotal, getProduct } = useProducts();

  return (
    <div
      className={twMerge('grid justify-items-end', className)}
      aria-hidden="true"
    >
      <div className="w-full">
        <div className="mb-[3.2rem] flex items-center justify-between">
          <p className="text-cart text-[1.8rem] tracking-[0.12rem] text-black">
            Summary
          </p>
        </div>
        <div className="mb-[3.2rem] grid gap-[2.4rem]">
          {cart.map(({ id, quantity }) => {
            const product = getProduct(id);
            if (product) {
              return (
                <div key={id} className="flex items-center">
                  <div className="relative mr-[1.6rem] h-[6.4rem] w-[6.4rem] flex-shrink-0 overflow-hidden rounded bg-light200">
                    <img
                      src={product.images.product.mobile}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                      alt="asad"
                    />
                  </div>
                  <div className="grid flex-grow">
                    <div className="flex justify-between">
                      <span className="text-cart">{product.cartName}</span>
                      <span className="text-cart font-bold lowercase text-black/50">
                        x{quantity}
                      </span>
                    </div>
                    <span className="text-cart text-black/50">
                      $ {formatPrice(product.price)}
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="mb-[0.8rem] flex items-center justify-between">
          <span className="text-cart font-medium text-black/50">Total</span>
          <p className="text-cart text-[1.8rem] font-bold leading-[2.5rem] text-black">
            $ {formatPrice(getTotal())}
          </p>
        </div>
        <div className="mb-[0.8rem] flex items-center justify-between">
          <span className="text-cart font-medium text-black/50">Shipping</span>
          <p className="text-cart text-[1.8rem] font-bold leading-[2.5rem] text-black">
            $ {formatPrice(50)}
          </p>
        </div>
        <div className="mb-[2.4rem] flex items-center justify-between">
          <span className="text-cart font-medium text-black/50">
            VAT (included)
          </span>
          <p className="text-cart text-[1.8rem] font-bold leading-[2.5rem] text-black">
            $ {formatPrice(Math.round(getTotal() * 0.2))}
          </p>
        </div>
        <div className="mb-[3.2rem] flex items-center justify-between">
          <span className="text-cart font-medium text-black/50">
            Grand Total
          </span>
          <p className="text-cart text-[1.8rem] font-bold leading-[2.5rem] text-orange">
            $ {formatPrice(getTotal() + 50)}
          </p>
        </div>
      </div>
    </div>
  );
}
