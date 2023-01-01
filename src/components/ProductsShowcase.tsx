/* eslint-disable no-empty-pattern */
import Text from '@/components/Text';
import Button from '@/components/Button';
import image_zx9 from '@/assets/home/mobile/image-speaker-zx9.png';
import image_yx1 from '@/assets/home/mobile/image-earphones-yx1.jpg';

export default function ProductsShowcase() {
  return (
    <section className="c-container mb-[12rem] grid gap-[3.2rem]">
      <div className="flex flex-col items-center gap-[3.2rem] rounded bg-orange bg-[url('@/assets/home/desktop/pattern-circles.svg')] bg-[length:55.8rem] bg-[center_top_-12rem] bg-no-repeat px-[2.4rem] py-[5.5rem]">
        <img src={image_zx9} className="w-[17rem]" alt="zx9 speaker" />
        <div className="grid justify-items-center gap-[2.4rem]">
          <Text variant="h1" className="text-center text-white">
            ZX9 SPEAKER
          </Text>
          <Text className="text-center text-white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Button variant="dark" as="link">
            See product
          </Button>
        </div>
      </div>

      <div className="flex h-[32rem] items-center rounded bg-gray/20 bg-[url('@/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right bg-no-repeat px-[2.4rem]">
        <div className="grid gap-[3.2rem]">
          <Text variant="h2" className="text-black">
            ZX7 SPEAKER
          </Text>
          <Button variant="outline" as="link">
            See product
          </Button>
        </div>
      </div>

      <div className="grid gap-[2.4rem]">
        <img src={image_yx1} className="w-full rounded" alt="zx9 speaker" />
        <div className="grid gap-[3.2rem] px-[2.4rem] py-[4.1rem]">
          <Text variant="h2" className="text-black">
            YX1 EARPHONES
          </Text>
          <Button variant="outline" as="link">
            See product
          </Button>
        </div>
      </div>
    </section>
  );
}
