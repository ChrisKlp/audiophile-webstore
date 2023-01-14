import { Link, useLoaderData, useParams } from 'react-router-dom';
import { TCategoryLoaderData } from '@/models';
import { routes } from '@/navigation';
import { getUrl } from '@/utils/utils';
import BgPicture from '@/components/BgPicture';

export default function Category() {
  const { categoryId } = useParams();
  const products = useLoaderData() as TCategoryLoaderData;
  const sortedProducts = [...products].sort((a, b) =>
    a.slug > b.slug ? -1 : 1
  );

  return (
    <>
      <section className="mb-[6.4rem] grid h-[10.2rem] items-center bg-black">
        <h1 className="h2 text-center text-white">{categoryId}</h1>
      </section>
      <div className="c-container">
        <div className="mb-[12rem] grid gap-[12rem]">
          {sortedProducts.map((product) => (
            <section key={product.slug}>
              <BgPicture
                alt={product.name}
                images={product.images.preview}
                wrapperStyle="mb-[4rem] w-full h-[35.2rem] rounded bg-light200"
                imageStyle="h-full"
              />
              <div className="grid justify-items-center gap-[2.4rem]">
                {product.featured && (
                  <span className="text-overline block text-orange">
                    {product.featured}
                  </span>
                )}
                <h2 className="h2 text-center">{product.name}</h2>
                <p className="text-center text-base text-black/50">
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
    </>
  );
}
