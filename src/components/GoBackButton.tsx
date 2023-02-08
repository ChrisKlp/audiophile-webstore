import React from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export default function GoBackButton({ className }: Props) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={twMerge(
        'pt-[1.6rem] text-base opacity-50 duration-200 ease-in-out hover:text-orange hover:opacity-100 md:pt-[3.3rem] lg:pt-[7.9rem]',
        className
      )}
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
}
