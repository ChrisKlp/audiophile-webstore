import mobile from '@/assets/shared/mobile/image-best-gear.jpg';
import tablet from '@/assets/shared/tablet/image-best-gear.jpg';
import desktop from '@/assets/shared/desktop/image-best-gear.jpg';
import BgPicture from '@/components/BgPicture';
import { TProductImageSizes } from '@/models';

export default function About() {
  const images: TProductImageSizes = {
    mobile,
    tablet,
    desktop,
  };
  return (
    <section className="c-container mb-[12rem] grid justify-items-center md:mb-[9.6rem] lg:mb-[20rem] lg:h-[58.8rem] lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:justify-items-start lg:gap-[2rem]">
      <BgPicture
        alt="about - best gear"
        images={images}
        wrapperStyle="mb-[4rem] h-[30rem] rounded w-full md:mb-[6.3rem] lg:order-last lg:mb-0 lg:h-full"
        imageStyle="w-full h-full"
      />
      <div className="max-w-[57.3rem] lg:max-w-[44.5rem]">
        <h2 className="h2 mb-[3.2rem] text-center lg:text-left">
          Bringing you the <span className="text-orange">best</span> audio gear
        </h2>
        <p className="text-center text-base text-black/50 lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
