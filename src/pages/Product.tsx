import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { TProductLoaderData } from '@/models';
import { formatPrice, getUrl } from '@/utils/utils';
import Categories from '@/components/Categories';
import { routes } from '@/navigation';

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
          <div className="relative mb-[4rem] h-[32.7rem] overflow-hidden rounded bg-light200">
            <picture>
              <source
                srcSet={getUrl(product.images.product.desktop)}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={getUrl(product.images.product.tablet)}
                media="(min-width: 768px)"
              />
              <img
                src={getUrl(product.images.product.mobile)}
                alt={`${product.name}`}
                className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </picture>
          </div>
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
              <div
                key={imageName}
                className={`relative ${
                  index === 2 ? 'h-[36.8rem]' : 'h-[17.4rem]'
                } overflow-hidden rounded bg-light200`}
              >
                <picture>
                  <source
                    srcSet={getUrl(gallery.desktop)}
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcSet={getUrl(gallery.tablet)}
                    media="(min-width: 768px)"
                  />
                  <img
                    src={getUrl(gallery.mobile)}
                    alt={imageName}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                  />
                </picture>
              </div>
            )
          )}
        </div>

        {/* YOU MAY ALSO LIKE */}
        <section className="mb-[12rem]">
          <h3 className="h3 mb-[4rem] text-center">You may also like</h3>
          <div className="flex flex-col gap-[5.6rem]">
            {related.map((rProduct) => (
              <div key={rProduct.slug}>
                <div className="relative mb-[3.2rem] h-[12rem] overflow-hidden rounded bg-light200">
                  <picture>
                    <source
                      srcSet={getUrl(rProduct.images.product.desktop)}
                      media="(min-width: 1024px)"
                    />
                    <source
                      srcSet={getUrl(rProduct.images.product.tablet)}
                      media="(min-width: 768px)"
                    />
                    <img
                      src={getUrl(rProduct.images.product.mobile)}
                      alt={rProduct.shortName}
                      className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                  </picture>
                </div>
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
