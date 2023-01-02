import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Product() {
  const { productId } = useParams();
  return (
    <Layout>
      <section className="c-container">
        <h1 className="h1">Product {productId}</h1>
      </section>
    </Layout>
  );
}
