/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import logo from '../assets/shared/desktop/logo.svg';
import iconHamburger from '../assets/shared/tablet/icon-hamburger.svg';
import iconCart from '../assets/shared/desktop/icon-cart.svg';

type Props = {};

export default function Navigation({}: Props) {
  return (
    <nav className="flex h-[9rem] items-center justify-between bg-black py-[3.2rem] px-[2.4rem]">
      <button type="button">
        <img className="" src={iconHamburger} alt="icon hamburger" />
      </button>
      <img
        className="block h-[2.5rem] w-[14.3rem]"
        src={logo}
        alt="audiophile logo"
      />
      <button type="button">
        <img className="" src={iconCart} alt="icon cart" />
      </button>
    </nav>
  );
}
