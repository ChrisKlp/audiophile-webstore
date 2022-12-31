import About from '@/components/About';
import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <div>
      <Navigation transparent />
      <Hero />
      <Categories />
      <About />
    </div>
  );
}

export default App;
