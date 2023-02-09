import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import iconArrowRight from '@/assets/shared/desktop/icon-arrow-right.svg';
import imageEarphones from '@/assets/shared/desktop/image-category-thumbnail-earphones.png';
import imageHeadphones from '@/assets/shared/desktop/image-category-thumbnail-headphones.png';
import imageSpeakers from '@/assets/shared/desktop/image-category-thumbnail-speakers.png';
import { navigation } from '@/navigation';

const categories = navigation.slice(1, navigation.length).map((item) => {
  let image;
  switch (item.name) {
    case 'headphones':
      image = imageHeadphones;
      break;
    case 'speakers':
      image = imageSpeakers;
      break;
    case 'earphones':
      image = imageEarphones;
      break;
    default:
      break;
  }
  return { ...item, image };
});

type Props = {
  className?: string;
  onClick?: () => void;
};

export default function Categories({ className, onClick }: Props) {
  return (
    <section
      className={twMerge(
        'c-container grid gap-[1.6rem] pt-[4rem] pb-[12rem] md:grid-flow-col md:grid-cols-3 md:gap-[1rem] md:py-[9.8rem] lg:gap-[3rem] lg:pt-[12rem] lg:pb-[16.8rem]',
        className
      )}
    >
      {categories.map(({ name, image, path }) => (
        <Link
          to={path}
          key={name}
          onClick={onClick}
          className="group relative z-[0] grid grid-rows-[3fr_5fr_auto] justify-items-center"
        >
          {image && (
            <img
              src={image}
              className="row-[1/3] w-1/2 max-w-[22.4rem] duration-200 ease-in-out group-hover:-translate-y-3 md:w-3/4 md:self-center"
              alt={`${name} category`}
            />
          )}
          <span className="row-[3/4] grid justify-items-center pb-[2.2rem] lg:pb-[3rem]">
            <h6 className="h6 mb-[1.7rem]">{name}</h6>
            <span className="flex items-center gap-[1.2rem]">
              <span className="text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-black/50 duration-200 ease-in-out group-hover:text-orange">
                shop
              </span>
              <img src={iconArrowRight} alt="icon arrow right" />
            </span>
          </span>
          <div className="absolute z-[-1] row-[2/4] h-full w-full rounded bg-light200" />
        </Link>
      ))}
    </section>
  );
}
