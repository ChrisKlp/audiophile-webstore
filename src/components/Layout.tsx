import { Outlet, ScrollRestoration, useMatches } from 'react-router-dom';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { TLayoutConfig } from '@/models';

export default function Layout() {
  const matches = useMatches();
  const data = matches.find((match) => Boolean(match.data))
    ?.data as TLayoutConfig;

  return (
    <>
      <Navigation transparent={data?.transparentNav} />
      <main>
        <Outlet />
      </main>
      {!data?.clean && <About />}
      <Footer />
      <ScrollRestoration />
    </>
  );
}
