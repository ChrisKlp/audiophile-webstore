export default function About() {
  return (
    <section className="c-container mb-[12rem] grid justify-items-center md:mb-[9.6rem]">
      <div className="mb-[4rem] h-[30rem] w-full rounded bg-[url('@/assets/shared/mobile/image-best-gear.jpg')] bg-cover bg-center bg-no-repeat md:mb-[6.3rem] md:bg-[url('@/assets/shared/tablet/image-best-gear.jpg')] lg:bg-[url('@/assets/shared/desktop/image-best-gear.jpg')]" />
      <h2 className="h2 mb-[3.2rem] max-w-[57.3rem] text-center">
        Bringing you the <span className="text-orange">best</span> audio gear
      </h2>
      <p className="max-w-[57.3rem] text-center text-base text-black/50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
}
