/* eslint-disable import/extensions */
/* eslint-disable no-empty-pattern */

import Text from '@/components/Text';
import Button from '@/components/Button';
import imageHeader from '@/assets/home/mobile/image-header.jpg';

/* eslint-disable @typescript-eslint/ban-types */
type Props = {};

function Hero({}: Props) {
  return (
    <section className="relative z-0 h-[60rem] overflow-hidden bg-black">
      <img
        src={imageHeader}
        className="absolute z-[-1] h-full w-full object-cover opacity-50"
        alt="hero headphones"
      />
      <div className=" grid justify-items-center px-[2.4rem] pt-[19.8rem]">
        <Text variant="overline" className="pb-[1.6rem] text-white/50">
          New product
        </Text>
        <Text variant="h1" className="pb-[2.4rem] text-center text-white">
          XX99 Mark II HeadphoneS
        </Text>
        <Text className="pb-[2.8rem] text-center text-white/75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Button as="link">See product</Button>
      </div>
    </section>
  );
}

export default Hero;
