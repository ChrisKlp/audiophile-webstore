/* eslint-disable no-empty-pattern */
import { Link } from 'react-router-dom';
import image_zx9 from '@/assets/home/mobile/image-speaker-zx9.png';
import image_zx9_md from '@/assets/home/tablet/image-speaker-zx9.png';
import image_zx9_xl from '@/assets/home/desktop/image-speaker-zx9.png';
import image_yx1 from '@/assets/home/mobile/image-earphones-yx1.jpg';
import image_yx1_md from '@/assets/home/tablet/image-earphones-yx1.jpg';
import image_yx1_xl from '@/assets/home/desktop/image-earphones-yx1.jpg';
import { productsPaths } from '@/navigation';
import BgPicture from './BgPicture';

const yx1Images = {
  mobile: image_yx1,
  tablet: image_yx1_md,
  desktop: image_yx1_xl,
};

export default function ProductsShowcase() {
  return (
    <section className="c-container mb-[12rem] grid gap-[3.2rem] md:mb-[9.6rem] lg:mb-[20rem] lg:gap-[4.8rem]">
      <div className="group grid justify-items-center gap-[3.2rem] rounded bg-orange bg-[url('@/assets/home/desktop/pattern-circles.svg')] bg-[length:55.8rem] bg-[center_top_-12rem] bg-no-repeat px-[2.4rem] py-[5.5rem] md:gap-[6.4rem] md:bg-auto md:bg-[center_top_-28.8rem] md:pt-[5.2rem] md:pb-[6.4rem] lg:h-[56rem] lg:grid-flow-col lg:grid-cols-2 lg:items-end lg:gap-0 lg:overflow-hidden lg:bg-[left_-14.8rem_top_-3.6rem] lg:p-0">
        <picture className="lg:mr-[2.7rem] lg:justify-self-end">
          <source srcSet={image_zx9_xl} media="(min-width: 1024px)" />
          <source srcSet={image_zx9_md} media="(min-width: 768px)" />
          <img
            src={image_zx9}
            className="w-[17rem] duration-200 ease-in-out group-hover:scale-[1.05] md:w-[17.9rem] lg:w-[38rem] lg:translate-y-[1.8rem]"
            alt="zx9 speaker"
          />
        </picture>
        <div className="grid justify-items-center gap-[2.4rem] md:max-w-[34.9rem] lg:ml-[2.1rem] lg:justify-items-start lg:pb-[12.4rem]">
          <h2 className="h1 text-center text-white lg:text-left">
            ZX9 SPEAKER
          </h2>
          <p className="text-center text-base text-white lg:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={productsPaths.zx9} className="btn-dark md:mt-[1.6rem]">
            See product
          </Link>
        </div>
      </div>

      <div className="flex h-[32rem] items-center rounded bg-gray/20 bg-[url('@/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right bg-no-repeat px-[2.4rem] md:bg-[url('@/assets/home/tablet/image-speaker-zx7.jpg')] md:px-[6.2rem] lg:bg-[url('@/assets/home/desktop/image-speaker-zx7.jpg')] lg:px-[9.5rem]">
        <div className="grid gap-[3.2rem]">
          <h4 className="h4 text-black">ZX7 SPEAKER</h4>
          <Link to={productsPaths.zx7} className="btn-outline">
            See product
          </Link>
        </div>
      </div>

      <div className="grid gap-[2.4rem] md:h-[32rem] md:grid-flow-col md:grid-cols-2 md:items-center md:gap-[1.1rem] lg:gap-[3.2rem]">
        <BgPicture
          alt="YX1 EARPHONES"
          images={yx1Images}
          wrapperStyle="w-full h-[20rem] rounded md:h-full"
          imageStyle="w-full h-full"
        />
        <div className="grid h-full content-center gap-[3.2rem] rounded bg-light200 px-[2.4rem] py-[4.1rem] md:px-[4.1rem] lg:px-[9.5rem]">
          <h4 className="h4 text-black">YX1 EARPHONES</h4>
          <Link to={productsPaths.yx1} className="btn-outline">
            See product
          </Link>
        </div>
      </div>
    </section>
  );
}
