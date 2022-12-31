import About from '@/components/About';
import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function App() {
  return (
    <div>
      <Navigation transparent />
      <Hero />
      <Categories />
      <About />
      <Footer />
    </div>
  );
}

export default App;
