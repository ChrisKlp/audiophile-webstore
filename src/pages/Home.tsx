import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import ProductsShowcase from '@/components/ProductsShowcase';

export default function Home() {
  return (
    <Layout transparentNav>
      <Hero />
      <Categories />
      <ProductsShowcase />
    </Layout>
  );
}
