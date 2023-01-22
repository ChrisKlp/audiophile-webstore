import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import logo from '@/assets/shared/desktop/logo.svg';
import iconHamburger from '@/assets/shared/tablet/icon-hamburger.svg';
import iconCart from '@/assets/shared/desktop/icon-cart.svg';
import { navigation } from '@/navigation';
import Categories from '@/components/Categories';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Cart from './Cart';

type Props = {
  transparent?: boolean;
};

export default function Navigation({ transparent = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const ref = useRef(null);

  const onToggle = () => setIsOpen(!isOpen);
  const onCartToggle = () => setIsCartOpen(!isCartOpen);
  const onClose = () => {
    setIsOpen(false);
    setIsCartOpen(false);
  };

  useOnClickOutside(ref, onClose);

  return (
    <header
      ref={ref}
      className={twMerge(
        `relative z-10 h-[9rem] lg:h-auto ${
          transparent
            ? `absolute top-0 left-0 right-0 ${
                isOpen ? 'bg-black lg:bg-transparent' : 'bg-transparent'
              }`
            : 'bg-black'
        } `
      )}
    >
      <div className="c-container">
        <div className="flex items-center justify-between py-[3.2rem] md:justify-start lg:pt-[3.2rem] lg:pb-[3.6rem]">
          <button type="button" className="lg:hidden" onClick={onToggle}>
            <img className="" src={iconHamburger} alt="icon hamburger" />
          </button>
          <Link to="/" className="md:ml-[4.2rem] md:grow lg:ml-0">
            <img
              className="h-auto w-[14.3rem] flex-shrink-0"
              src={logo}
              alt="audiophile logo"
            />
          </Link>
          <button type="button" onClick={onCartToggle}>
            <img className="" src={iconCart} alt="icon cart" />
          </button>
        </div>
        <nav className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 items-center justify-center gap-[3.4rem] pb-[0.4rem] lg:flex">
          {navigation.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className="text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.2rem] text-white duration-200 ease-in-out hover:text-orange"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="md:c-container">
        <div className="h-[1px] w-full bg-white/10" />
      </div>
      {!!isOpen && (
        <div className="lg:hidden">
          <nav className="animate-fadeIn rounded-b-[0.8rem] bg-white">
            <Categories
              className="pb-[3.5rem] pt-[3.2rem] md:pb-[6.7rem] md:pt-[5.6rem]"
              onClick={onClose}
            />
          </nav>
          <div
            className="fixed top-0 left-0 bottom-0 right-0 z-[-1] animate-fadeIn bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />
        </div>
      )}
      {!!isCartOpen && <Cart onClose={onClose} className="animate-fadeIn" />}
    </header>
  );
}
