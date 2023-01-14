import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import BgPicture from '@/components/BgPicture';
import Categories from '@/components/Categories';
import { TProductLoaderData } from '@/models';
import { routes } from '@/navigation';
import { formatPrice } from '@/utils/utils';

export default function Product() {
  const { product, related } = useLoaderData() as TProductLoaderData;
  const navigate = useNavigate();

  return (
    <>
      <div className="c-container">
        <button
          type="button"
          className="mb-[2.4rem] pt-[1.6rem] text-base opacity-50"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        {/* PRODUCT HEADER */}
        <section className="mb-[8.8rem]">
          <BgPicture
            alt={product.name}
            images={product.images.product}
            wrapperStyle="mb-[4rem] h-[32.7rem] bg-light200"
            imageStyle="h-full"
          />
          <div className="grid gap-[3.2rem]">
            {product.featured && (
              <span className="text-overline block text-orange">
                {product.featured}
              </span>
            )}
            <h2 className="h2">{product.name}</h2>
            <p className="text-base text-black/50">{product.description}</p>
            <p className="mb-[0.7rem] text-[1.8rem] font-bold uppercase leading-[2.5rem] tracking-[0.13rem]">
              $ {formatPrice(product.price)}
            </p>
            <div>
              <button type="button" className="btn">
                add to cart
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-[8.8rem] grid gap-[2.4rem]">
          <h3 className="h3">Features</h3>
          {product.features.map((feature) => (
            <p key={feature} className="text-black/50">
              {feature}
            </p>
          ))}
        </section>

        {/* IN THE BOX */}
        <section className="mb-[8.8rem] grid gap-[2.4rem]">
          <h3 className="h3">In The Box</h3>
          <ul className="grid gap-[0.8rem]">
            {product.inTheBox.map((item) => {
              const amount = item.substring(0, item.indexOf(' '));
              const itemName = item.substring(
                item.indexOf(' '),
                item.length - 1
              );
              return (
                <li key={item} className="flex gap-[2.1rem]">
                  <span className="text-base font-bold text-orange">
                    {amount}
                  </span>
                  <span className="text-base text-black/50">{itemName}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* GALLERY */}
        <div className="mb-[12rem] grid gap-[2rem]">
          {Object.entries(product.images.gallery).map(
            ([imageName, gallery], index) => (
              <BgPicture
                key={imageName}
                alt={imageName}
                images={gallery}
                wrapperStyle={`${
                  index === 2 ? 'h-[36.8rem]' : 'h-[17.4rem]'
                } bg-light200 rounded`}
                imageStyle="w-full"
              />
            )
          )}
        </div>

        {/* YOU MAY ALSO LIKE */}
        <section className="mb-[12rem]">
          <h3 className="h3 mb-[4rem] text-center">You may also like</h3>
          <div className="flex flex-col gap-[5.6rem]">
            {related.map((rProduct) => (
              <div key={rProduct.slug}>
                <BgPicture
                  alt={rProduct.shortName}
                  images={rProduct.images.product}
                  wrapperStyle="mb-[3.2rem] h-[12rem] rounded bg-light200"
                  imageStyle="h-full"
                />
                <div className="grid justify-items-center">
                  <h3 className="h3 mb-[3.2rem] text-center">
                    {rProduct.shortName}
                  </h3>
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
      <Categories />
    </>
  );
}
