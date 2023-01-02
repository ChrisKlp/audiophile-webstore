import imageHeader from '@/assets/home/mobile/image-header.jpg';
import imageHeader_md from '@/assets/home/tablet/image-header.jpg';
import imageHeader_xl from '@/assets/home/desktop/image-hero.jpg';

function Hero() {
  return (
    <section className="relative z-0 h-[60rem] overflow-hidden bg-black md:h-[72.9rem]">
      <picture>
        <source srcSet={imageHeader_xl} media="(min-width: 1024px)" />
        <source srcSet={imageHeader_md} media="(min-width: 768px)" />
        <img
          src={imageHeader}
          alt="hero headphones"
          className="absolute z-[-1] h-full w-full object-cover opacity-50 lg:opacity-100"
        />
      </picture>
      <div className="c-container grid justify-items-center lg:justify-items-start">
        <div className="grid max-w-[39.7rem] justify-items-center pt-[19.8rem] md:pt-[21.6rem] lg:justify-items-start lg:pt-[22.5rem]">
          <p className="text-overline pb-[1.6rem] text-white/50 md:pb-[2.4rem]">
            New product
          </p>
          <h1 className="h1 pb-[2.4rem] text-center text-white lg:text-left">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="max-w-[35rem] pb-[2.8rem] text-center text-base text-white/75 md:px-[1.5rem] md:pb-[4rem] lg:px-0 lg:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a href="asd" className="btn">
            See product
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
