import { Link, useLoaderData, useParams } from 'react-router-dom';
import BgPicture from '@/components/BgPicture';
import { TCategoryLoaderData } from '@/models';
import { routes } from '@/navigation';
import Categories from '@/components/Categories';

export default function Category() {
  const { categoryId } = useParams();
  const products = useLoaderData() as TCategoryLoaderData;
  const sortedProducts = [...products].sort((a, b) =>
    a.slug > b.slug ? -1 : 1
  );

  return (
    <>
      <section className="mb-[6.4rem] grid h-[10.2rem] items-center bg-black md:mb-[12rem] md:h-[24.6rem] lg:mb-[16rem] lg:h-[23.9rem]">
        <h1 className="h2 text-center text-white">{categoryId}</h1>
      </section>
      <div className="c-container">
        <div className="mb-[8rem] grid gap-[12rem] md:mb-[2.2rem] lg:mb-[4rem] lg:gap-[16rem]">
          {sortedProducts.map((product, index) => (
            <section
              key={product.slug}
              className="lg:grid lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:gap-[3rem]"
            >
              <BgPicture
                alt={product.name}
                images={product.images.preview}
                wrapperStyle={`mb-[4rem] w-full h-[35.2rem] rounded bg-light200 md:mb-[5.2rem] lg:h-[56rem] lg:m-0 ${
                  index % 2 !== 0 && 'lg:order-1'
                }`}
                imageStyle="h-full"
              />
              <div
                className={`grid justify-items-center gap-[2.4rem] md:gap-[1.6rem] lg:w-[44.5rem] lg:justify-items-start ${
                  index % 2 === 0 && 'justify-self-end'
                }`}
              >
                {product.featured && (
                  <span className="text-overline block text-orange">
                    {product.featured}
                  </span>
                )}
                <h2 className="h2 text-center md:mb-[1.6rem] lg:text-left">
                  {product.name}
                </h2>
                <p className="text-center text-base text-black/50 md:mb-[0.8rem] lg:mb-[2.4rem] lg:text-left">
                  {product.description}
                </p>
                <Link to={`${routes.product}/${product.slug}`} className="btn">
                  See product
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Categories className="md:mb-[2.2rem] lg:mb-0" />
    </>
  );
}
