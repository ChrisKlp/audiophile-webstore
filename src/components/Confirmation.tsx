import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import confirmationIcon from '@/assets/checkout/icon-order-confirmation.svg';
import useCart from '@/features/cartStore';
import useProducts from '@/hooks/useProducts';
import { formatPrice } from '@/utils/utils';
import SummaryItem from '@/components/SummaryItem';

type Props = {
  onClose: () => void;
};

export default function Confirmation({ onClose }: Props) {
  const cart = useCart((state) => state.cart);
  const { getProduct, getTotal } = useProducts();
  const [showMore, setShowMore] = useState(false);
  const [contentHeight, setContentHeight] = useState(64);
  const ref = useRef<HTMLDivElement>(null);

  const toggleShowMore = () => {
    setShowMore((state) => !state);
    const elementsHeight = ref.current?.scrollHeight;
    if (elementsHeight) setContentHeight(!showMore ? elementsHeight : 64);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="c-container fixed top-0 left-0 bottom-0 right-0 z-50 grid animate-fadeIn content-center justify-items-center">
      <div className="my-[2.4rem] w-full max-w-[54rem] overflow-auto rounded bg-white px-[3.2rem] py-[3.2rem]">
        <img
          className="mb-[2.4rem]"
          src={confirmationIcon}
          alt="confirmation icon"
        />
        <p className="h3 mb-[1.6rem]">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </p>
        <p className="mb-[2.4rem] text-base text-black/50">
          You will receive an email confirmation shortly.
        </p>
        <div className="mb-[2.4rem] grid md:grid-flow-col">
          <div className="grid gap-[2.4rem] rounded rounded-b-none bg-light200 px-[2.4rem] py-[2.4rem] md:rounded-r-none md:rounded-l">
            <div
              ref={ref}
              className={twMerge(
                'grid gap-[2.4rem] overflow-hidden duration-300 ease-in-out'
              )}
              style={{ maxHeight: `${contentHeight}px` }}
            >
              {cart.map(({ id, quantity }) => {
                const product = getProduct(id);
                if (product) {
                  return (
                    <SummaryItem
                      key={id}
                      quantity={quantity}
                      product={product}
                    />
                  );
                }
                return null;
              })}
            </div>
            {cart.length > 1 && (
              <>
                <div className="h-[0.1rem] w-full bg-black/10" />
                <button
                  type="button"
                  className="input-label text-black/50"
                  onClick={toggleShowMore}
                >
                  {showMore
                    ? 'View less'
                    : `and ${cart.length - 1} other item(s)`}
                </button>
              </>
            )}
          </div>
          <div className="grid min-h-[9.2rem] content-center gap-[0.8rem] rounded rounded-t-none bg-black px-[2.4rem] md:rounded-l-none md:rounded-r md:px-[3.2rem]">
            <span className="text-cart font-medium text-white/50">
              Grand Total
            </span>
            <p className="text-cart text-[1.8rem] font-bold leading-[2.5rem] text-white">
              $ {formatPrice(getTotal() + 50)}
            </p>
          </div>
        </div>
        <button type="button" className="btn w-full" onClick={onClose}>
          CONTINUE & PAY
        </button>
      </div>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 z-[-1] bg-black/40"
        aria-hidden="true"
        onClick={onClose}
      />
    </div>
  );
}
