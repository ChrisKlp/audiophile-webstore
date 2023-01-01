import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  variant?: 'default' | 'outline' | 'dark';
  as?: 'button' | 'link';
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const commonStyle =
  'h-[4.8rem] w-[16rem] text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] duration-200 ease-in-out';

const buttonVariants = {
  default: 'bg-orange text-white hover:bg-lightOrange',
  outline:
    'border-[1px] border-black bg-transparent text-black hover:bg-black hover:text-white',
  dark: 'bg-black text-white hover:bg-gray',
};

export default function Button({
  variant = 'default',
  as = 'button',
  className,
  children,
  ...props
}: Props) {
  return React.createElement(
    as === 'button' ? 'button' : 'a',
    {
      className: twMerge(
        `${commonStyle} ${buttonVariants[variant]} ${
          as === 'link' && 'flex items-center justify-center cursor-pointer'
        } ${className}`
      ),
      ...props,
    },
    children
  );
}
