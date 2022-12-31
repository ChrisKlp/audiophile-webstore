import { twMerge } from 'tailwind-merge';

type Props = {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'overline'
    | 'small';
  children: React.ReactNode;
  className?: string;
};

const textVariants = {
  h1: 'text-[3.6rem] font-bold uppercase leading-[4rem] tracking-[0.12rem] md:text-[5.6rem] md:leading-[5.8rem] md:tracking-[0.2rem]',
  h2: 'text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.1rem] md:text-[4rem] md:leading-[4.4rem] md:tracking-[0.14rem]',
  h3: 'text-[3.6rem] font-bold uppercase leading-[4rem] tracking-[0.12rem] md:text-[3.2rem] md:leading-[3.6rem] md:tracking-[0.17rem]',
  h4: 'text-[3.6rem] font-bold uppercase leading-[4rem] tracking-[0.12rem] md:text-[2.8rem] md:leading-[3.8rem] md:tracking-[0.2rem]',
  h5: 'text-[3.6rem] font-bold uppercase leading-[4rem] tracking-[0.12rem] md:text-[2.4rem] md:leading-[3.3rem] md:tracking-[0.17rem]',
  h6: 'text-[1.5rem] font-bold uppercase leading-[2rem] tracking-[0.1rem] md:text-[1.8rem] md:leading-[2.5rem] md:tracking-[0.12rem]',
  p: 'text-[1.5rem] font-medium leading-[2.5rem]',
  overline:
    'text-[1.4rem] font-normal uppercase leading-[1.9rem] tracking-[1rem]',
  small: 'text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem]',
};

export default function Text({ variant = 'p', children, className }: Props) {
  const CustomTag = (
    variant === ('overline' || 'small') ? 'p' : variant
  ) as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={twMerge(`${textVariants[variant]} ${className}`)}>
      {children}
    </CustomTag>
  );
}
