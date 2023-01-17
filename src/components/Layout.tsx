import { Outlet, ScrollRestoration, useMatches } from 'react-router-dom';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { TLayoutConfig } from '@/models';

export default function Layout() {
  const matches = useMatches();
  const { layoutConfig } = matches.find((match) => Boolean(match.data))
    ?.data as {
    layoutConfig?: TLayoutConfig;
  };

  return (
    <>
      <Navigation transparent={layoutConfig?.transparentNav} />
      <main>
        <Outlet />
        {!layoutConfig?.removeAbout && <About />}
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
