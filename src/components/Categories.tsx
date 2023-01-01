/* eslint-disable no-empty-pattern */
import iconArrowRight from '@/assets/shared/desktop/icon-arrow-right.svg';
import imageEarphones from '@/assets/shared/desktop/image-category-thumbnail-earphones.png';
import imageSpeakers from '@/assets/shared/desktop/image-category-thumbnail-speakers.png';
import imageHeadphones from '@/assets/shared/desktop/image-category-thumbnail-headphones.png';

const categoryList = [
  {
    name: 'Headphones',
    image: imageHeadphones,
    url: 'asd',
  },
  {
    name: 'Speakers',
    image: imageSpeakers,
    url: 'asd',
  },
  {
    name: 'Earphones',
    image: imageEarphones,
    url: 'asd',
  },
];

export default function Categories() {
  return (
    <section className="c-container grid gap-[1.6rem] pt-[4rem] pb-[12rem] md:grid-flow-col md:gap-[1rem] md:py-[9.8rem]">
      {categoryList.map(({ image, name, url }) => (
        <div
          key={name}
          className="grid grid-rows-[1fr_auto_auto] justify-items-center pb-[2.2rem]"
        >
          <img
            src={image}
            className="w-1/2 max-w-[22.4rem] md:w-3/4"
            alt={`${name} category`}
          />
          <h6 className="h6 mb-[1.7rem]">{name}</h6>
          <a href={url} className="group">
            <span className="flex items-center gap-[1.2rem]">
              <span className="text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-black/50 duration-200 ease-in-out group-hover:text-orange">
                shop
              </span>
              <img src={iconArrowRight} alt="icon arrow right" />
            </span>
          </a>
        </div>
      ))}
    </section>
  );
}