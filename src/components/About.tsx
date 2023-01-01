import Text from '@/components/Text';

export default function About() {
  return (
    <section className="c-container mb-[12rem]">
      <div className="mb-[4rem] h-[30rem] rounded bg-[url('@/assets/shared/mobile/image-best-gear.jpg')] bg-cover bg-center bg-no-repeat" />
      <Text variant="h2" className="mb-[3.2rem] text-center">
        Bringing you the <span className="text-orange">best</span> audio gear
      </Text>
      <Text className="text-center text-black/50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </Text>
    </section>
  );
}
