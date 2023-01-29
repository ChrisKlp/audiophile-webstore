/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import useCart from '@/features/cartStore';
import { routes } from '@/navigation';
import { formatPrice } from '@/utils/utils';

type Props = {
  className?: string;
  onClose: () => void;
};

export default function Cart({ className, onClose }: Props) {
  const { cart, removeAll, decreaseQuantity, increaseQuantity } = useCart();

  function getTotal() {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  return (
    <>
      <div
        className={twMerge('c-container grid justify-items-end', className)}
        aria-hidden="true"
      >
        <div className="mt-[2.4rem] w-full max-w-[37.7rem] rounded bg-white px-[2.8rem] py-[3.2rem] md:px-[3.2rem]">
          <div className="mb-[3.2rem] flex items-center justify-between">
            <p className="text-cart text-[1.8rem] tracking-[0.12rem] text-black">
              Cart
            </p>
            <button
              type="button"
              onClick={removeAll}
              className="text-cart font-medium capitalize text-black/50 underline"
            >
              Remove all
            </button>
          </div>
          <div className="mb-[3.2rem] grid gap-[2.4rem]">
            {cart.map(({ id, product, quantity }) => (
              <div key={id} className="flex items-center">
                <div className="relative mr-[1.6rem] h-[6.4rem] w-[6.4rem] flex-shrink-0 overflow-hidden rounded bg-light200">
                  <img
                    src={product.images.product.mobile}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                    alt="asad"
                  />
                </div>
                <div className="grid flex-grow">
                  <span className="text-cart">{product.cartName}</span>
                  <span className="text-cart text-black/50">
                    $ {formatPrice(product.price)}
                  </span>
                </div>
                <div className="flex h-[3.2rem] w-[9.6rem] items-center justify-center gap-[1.2rem] bg-light200">
                  <button
                    type="button"
                    className="text-small h-[1.8rem} w-[1.6rem] text-black/25"
                    onClick={() => decreaseQuantity(id)}
                  >
                    -
                  </button>
                  <span className="text-small h-[1.8rem} w-[1.6rem] text-center text-base font-bold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    className="text-small h-[1.8rem} w-[1.6rem] text-black/25"
                    onClick={() => increaseQuantity(id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-[2.4rem] flex items-center justify-between">
            <span className="text-cart font-medium text-black/50">Total</span>
            <p className="text-cart text-[1.8rem] font-bold leading-[2.5rem] text-black">
              $ {formatPrice(getTotal())}
            </p>
          </div>
          <Link to={routes.checkout} className="btn w-full" onClick={onClose}>
            Checkout
          </Link>
        </div>
      </div>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 z-[-1] animate-fadeIn bg-black/40"
        aria-hidden="true"
        onClick={onClose}
      />
    </>
  );
}
