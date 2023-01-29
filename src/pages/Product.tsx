import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BgPicture from '@/components/BgPicture';
import Categories from '@/components/Categories';
import GoBackButton from '@/components/GoBackButton';
import { TProductLoaderData } from '@/models';
import { routes } from '@/navigation';
import { formatPrice } from '@/utils/utils';
import useCart from '@/features/cartStore';

export default function Product() {
  const { product, related } = useLoaderData() as TProductLoaderData;
  const addToCart = useCart((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  function handleQuantityClick(isIncrease = true) {
    let value = 1;
    if (!isIncrease) value = -1;
    setQuantity((state) => state + value);
  }

  return (
    <>
      <div className="c-container">
        <GoBackButton />

        {/* PRODUCT HEADER */}
        <section className="mb-[8.8rem] md:mb-[12rem] md:grid md:grid-flow-col md:grid-cols-[1fr_auto] md:gap-[6.9rem] lg:mb-[16rem] lg:grid-cols-2 lg:gap-[3rem]">
          <BgPicture
            alt={product.name}
            images={product.images.product}
            wrapperStyle="mb-[4rem] h-[32.7rem] rounded bg-light200 md:w-full md:h-[48rem] md:mb-0 lg:h-[56rem]"
            imageStyle="h-full md:w-full lg:object-contain"
          />
          <div className="grid gap-[2.4rem] md:w-[34rem] md:content-center lg:w-[44.5rem] lg:gap-[3.2rem] lg:justify-self-end">
            {product.featured && (
              <span className="text-overline block text-orange md:mb-[-1.6rem]">
                {product.featured}
              </span>
            )}
            <h2 className="h2-alt">{product.name}</h2>
            <p className="text-base text-black/50">{product.description}</p>
            <p className="mb-[0.7rem] text-[1.8rem] font-bold uppercase leading-[2.5rem] tracking-[0.13rem] lg:mb-[1.5rem]">
              $ {formatPrice(product.price)}
            </p>
            <div className="flex gap-[1.6rem]">
              <div className="flex h-[4.8rem] w-[12rem] items-center justify-center gap-[2rem] bg-light200">
                <button
                  type="button"
                  className="text-small h-[1.8rem} w-[1.6rem] text-black/25"
                  disabled={quantity === 1}
                  onClick={() => handleQuantityClick(false)}
                >
                  -
                </button>
                <span className="h-[1.8rem} w-[1.6rem] text-center text-base font-bold">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="text-small h-[1.8rem} w-[1.6rem] text-black/25"
                  onClick={() => handleQuantityClick(true)}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn"
                onClick={() => addToCart(product, quantity)}
              >
                add to cart
              </button>
            </div>
          </div>
        </section>

        <section className="mb-[8.8rem] flex flex-col gap-[8.8rem] md:mb-[12rem] md:gap-[12rem] lg:mb-[16rem] lg:w-full lg:flex-row lg:justify-between lg:gap-[5rem]">
          {/* FEATURES */}
          <div className="grid content-start gap-[2.4rem] md:gap-[3.2rem] lg:max-w-[63.5rem]">
            <h3 className="h3">Features</h3>
            {product.features.map((feature) => (
              <p key={feature} className="text-black/50">
                {feature}
              </p>
            ))}
          </div>

          {/* IN THE BOX */}
          <div className="grid gap-[2.4rem] md:grid-flow-col md:grid-cols-2 md:gap-[1.2rem] lg:w-full lg:max-w-[35rem] lg:grid-flow-row lg:grid-cols-1 lg:content-start lg:gap-[3.2rem]">
            <h3 className="h3">In The Box</h3>
            <ul className="grid gap-[0.8rem]">
              {product.inTheBox.map((item) => {
                const amount = item.substring(0, item.indexOf(' '));
                const itemName = item.substring(
                  item.indexOf(' '),
                  item.length - 1
                );
                return (
                  <li key={item} className="flex gap-[2.1rem] md:gap-[2.4rem]">
                    <span className="w-[1.8rem] flex-shrink-0 text-base font-bold text-orange">
                      {amount}
                    </span>
                    <span className="text-base text-black/50">{itemName}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* GALLERY */}
        <div className="mb-[12rem] grid gap-[2rem] md:grid-flow-col md:grid-cols-[auto_0.6fr] md:grid-rows-2 md:gap-[1.8rem] lg:mb-[16rem]">
          {Object.entries(product.images.gallery).map(
            ([imageName, gallery], index) => (
              <BgPicture
                key={imageName}
                alt={imageName}
                images={gallery}
                wrapperStyle={`${
                  index === 2
                    ? 'h-[36.8rem] md:row-span-2 md:h-full'
                    : 'h-[17.4rem] lg:h-[28rem]'
                } bg-light200 rounded`}
                imageStyle="w-full h-full"
              />
            )
          )}
        </div>

        {/* YOU MAY ALSO LIKE */}
        <section className="mb-[8rem] md:mb-[2.2rem] lg:mb-[4rem]">
          <h3 className="h3 mb-[4rem] text-center md:mb-[5.6rem] lg:mb-[6.4rem]">
            You may also like
          </h3>
          <div className="flex flex-col gap-[5.6rem] md:flex-row md:gap-[1.1rem] lg:gap-[3rem]">
            {related.map((rProduct) => (
              <div key={rProduct.slug} className="w-full">
                <BgPicture
                  alt={rProduct.shortName}
                  images={rProduct.images.product}
                  wrapperStyle="mb-[3.2rem] h-[12rem] rounded bg-light200 md:h-[31.8rem] md:mb-[4rem]"
                  imageStyle="h-full md:w-full"
                />
                <div className="grid justify-items-center">
                  <h5 className="h5 mb-[3.2rem] text-center">
                    {rProduct.shortName}
                  </h5>
                  <Link
                    to={`${routes.product}/${rProduct.slug}`}
                    className="btn"
                  >
                    see product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Categories className="md:mb-[2.2rem] lg:mb-0" />
    </>
  );
}
