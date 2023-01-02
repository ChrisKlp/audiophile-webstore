import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Category() {
  const { categoryId } = useParams();
  return (
    <Layout>
      <section className="c-container">
        <h1 className="h1">Category {categoryId}</h1>
      </section>
    </Layout>
  );
}
