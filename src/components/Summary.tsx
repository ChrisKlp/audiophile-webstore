/* eslint-disable react-hooks/exhaustive-deps */
import { twMerge } from 'tailwind-merge';
import useCart from '@/features/cartStore';
import useProducts from '@/hooks/useProducts';
import { formatPrice } from '@/utils/utils';
import SummaryItem from '@/components/SummaryItem';

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
                <SummaryItem key={id} quantity={quantity} product={product} />
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
