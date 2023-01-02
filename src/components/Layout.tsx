import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

type Props = {
  transparentNav?: boolean;
  clean?: boolean;
  children?: React.ReactNode;
};

export default function Layout({
  transparentNav = false,
  clean = false,
  children,
}: Props) {
  return (
    <>
      <Navigation transparent={transparentNav} />
      <main>
        {children}
        {!clean && <About />}
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
