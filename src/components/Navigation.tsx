import logo from '@/assets/shared/desktop/logo.svg';
import iconHamburger from '@/assets/shared/tablet/icon-hamburger.svg';
import iconCart from '@/assets/shared/desktop/icon-cart.svg';
import navigation from '@/navigation';

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
      <div className="c-container relative">
        <div className="flex items-center justify-between py-[3.2rem] md:justify-start lg:pt-[3.2rem] lg:pb-[3.6rem]">
          <button type="button" className="lg:hidden">
            <img className="" src={iconHamburger} alt="icon hamburger" />
          </button>
          <div className="md:ml-[4.2rem] md:grow lg:ml-0">
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
        <nav className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 items-center justify-center gap-[3.4rem] pb-[0.4rem] lg:flex">
          {navigation.map(({ name, url }) => (
            <a
              key={url}
              href={url}
              className="text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.2rem] text-white duration-200 ease-in-out hover:text-orange"
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="h-[1px] w-full bg-white/10" />
      </div>
    </header>
  );
}
