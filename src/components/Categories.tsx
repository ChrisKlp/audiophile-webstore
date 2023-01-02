import { twMerge } from 'tailwind-merge';
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

type Props = {
  className?: string;
};

export default function Categories({ className }: Props) {
  return (
    <section
      className={twMerge(
        'c-container grid gap-[1.6rem] pt-[4rem] pb-[12rem] md:grid-flow-col md:gap-[1rem] md:py-[9.8rem] lg:gap-[3rem] lg:pt-[12rem] lg:pb-[16.8rem]',
        className
      )}
    >
      {categoryList.map(({ image, name, url }) => (
        <button
          type="button"
          key={name}
          className="group relative z-[0] grid grid-rows-[3fr_5fr_auto] justify-items-center"
        >
          <img
            src={image}
            className="row-[1/3] w-1/2 max-w-[22.4rem] md:w-3/4 md:self-center"
            alt={`${name} category`}
          />
          <span className="row-[3/4] grid justify-items-center pb-[2.2rem] lg:pb-[3rem]">
            <h6 className="h6 mb-[1.7rem]">{name}</h6>
            <a href={url}>
              <span className="flex items-center gap-[1.2rem]">
                <span className="text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-black/50 duration-200 ease-in-out group-hover:text-orange">
                  shop
                </span>
                <img src={iconArrowRight} alt="icon arrow right" />
              </span>
            </a>
          </span>
          <div className="absolute z-[-1] row-[2/4] h-full w-full rounded bg-light200" />
        </button>
      ))}
    </section>
  );
}
