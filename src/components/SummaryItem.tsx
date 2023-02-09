import React from 'react';
import { TProductData } from '@/models';
import { formatPrice } from '@/utils/utils';

type Props = {
  product: TProductData;
  quantity: number;
};

export default function SummaryItem({ product, quantity }: Props) {
  return (
    <div className="flex items-center">
      <div className="relative mr-[1.6rem] h-[6.4rem] w-[6.4rem] flex-shrink-0 overflow-hidden rounded bg-light200">
        <img
          src={product.images.cart}
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
