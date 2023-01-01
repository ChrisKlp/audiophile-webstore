import logo from '@/assets/shared/desktop/logo.svg';
import iconHamburger from '@/assets/shared/tablet/icon-hamburger.svg';
import iconCart from '@/assets/shared/desktop/icon-cart.svg';

type Props = {
  transparent?: boolean;
};

export default function Navigation({ transparent = false }: Props) {
  return (
    <header
      className={`z-10 flex h-[9rem] items-center justify-between border-b-[1px] border-b-white/10 py-[3.2rem] px-[2.4rem] ${
        transparent
          ? 'absolute top-0 left-0 right-0 bg-transparent'
          : 'bg-black'
      } `}
    >
      <button type="button">
        <img className="" src={iconHamburger} alt="icon hamburger" />
      </button>
      <img
        className="as block h-auto w-[14.3rem] flex-shrink-0"
        src={logo}
        alt="audiophile logo"
      />
      <button type="button">
        <img className="" src={iconCart} alt="icon cart" />
      </button>
    </header>
  );
}
