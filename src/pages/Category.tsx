import { Link, useLoaderData, useParams } from 'react-router-dom';
import { TCategoryLoaderData } from '@/models';
import { routes } from '@/navigation';
import { getUrl } from '@/utils/utils';

export default function Category() {
  const { categoryId } = useParams();
  const products = useLoaderData() as TCategoryLoaderData;

  return (
    <section className="c-container">
      <h1 className="h1">Category {categoryId}</h1>
      {products.map((product) => (
        <section
          key={product.slug}
          className="mb-10 grid justify-items-center bg-gray/20 p-10"
        >
          <picture>
            <source
              srcSet={getUrl(product.images.preview.desktop)}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={getUrl(product.images.preview.tablet)}
              media="(min-width: 768px)"
            />
            <img
              src={getUrl(product.images.preview.mobile)}
              alt={`${product.name}`}
              className=""
            />
          </picture>
          {product.featured && (
            <p className="text-overline text-center">{product.featured}</p>
          )}
          <h2 className="h2 text-center">{product.name}</h2>
          <p className="mb-10 text-center text-base">{product.description}</p>
          <Link to={`${routes.product}/${product.slug}`} className="btn">
            See product
          </Link>
        </section>
      ))}
    </section>
  );
}
