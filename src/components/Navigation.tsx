import logo from '@/assets/shared/desktop/logo.svg';
import iconHamburger from '@/assets/shared/tablet/icon-hamburger.svg';
import iconCart from '@/assets/shared/desktop/icon-cart.svg';

type Props = {
  transparent?: boolean;
};

export default function Navigation({ transparent = false }: Props) {
  return (
    <header
      className={`z-10 h-[9rem] ${
        transparent
          ? 'absolute top-0 left-0 right-0 bg-transparent'
          : 'bg-black'
      } `}
    >
      <div className="c-container">
        <div className="flex items-center justify-between py-[3.2rem] md:justify-start">
          <button type="button">
            <img className="" src={iconHamburger} alt="icon hamburger" />
          </button>
          <div className="md:ml-[4.2rem] md:grow">
            <img
              className="h-auto w-[14.3rem] flex-shrink-0"
              src={logo}
              alt="audiophile logo"
            />
          </div>
          <button type="button">
            <img className="" src={iconCart} alt="icon cart" />
          </button>
        </div>
        <div className="h-[1px] w-full bg-white/10" />
      </div>
    </header>
  );
}
