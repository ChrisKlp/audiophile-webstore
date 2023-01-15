import { twMerge } from 'tailwind-merge';
import { TProductImageSizes } from '@/models';
import { getUrl } from '@/utils/utils';

type Props = {
  images: TProductImageSizes;
  alt: string;
  wrapperStyle?: string;
  imageStyle?: string;
};

export default function BgPicture({
  images,
  alt,
  wrapperStyle,
  imageStyle,
}: Props) {
  return (
    <div className={twMerge('group relative overflow-hidden', wrapperStyle)}>
      <picture>
        <source srcSet={getUrl(images.desktop)} media="(min-width: 1024px)" />
        <source srcSet={getUrl(images.tablet)} media="(min-width: 768px)" />
        <img
          src={getUrl(images.mobile)}
          alt={alt}
          className={twMerge(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover duration-300 ease-in-out group-hover:scale-[105%]',
            imageStyle
          )}
        />
      </picture>
    </div>
  );
}
