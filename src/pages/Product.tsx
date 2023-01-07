import { useLoaderData } from 'react-router-dom';
import { TProductData } from '@/models';

export default function Product() {
  const product = useLoaderData() as TProductData;

  return (
    <section className="c-container">
      {product.featured && <p className="text-base">{product.featured}</p>}
      <h1 className="h1">{product.name}</h1>
      <p className="text-base">{product.description}</p>
      <h5 className="h5">$ {product.price}</h5>
      <p className="h4">Features:</p>
      {product.features.map((feature) => (
        <p key={feature} className="mb-4">
          {feature}
        </p>
      ))}
      <p className="h4">In The Box:</p>
      <ul>
        {product.inTheBox.map((item) => (
          <li key={item} className="">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
