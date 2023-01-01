import About from '@/components/About';
import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductsShowcase from './components/ProductsShowcase';

function App() {
  return (
    <div>
      <Navigation transparent />
      <main>
        <Hero />
        <Categories />
        <ProductsShowcase />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
