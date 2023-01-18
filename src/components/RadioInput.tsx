/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  id: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function RadioInput({ id, label, checked }: Props) {
  const { setValue } = useFormContext();

  function handleClick() {
    setValue(id, label);
  }

  return (
    <button
      type="button"
      className="input flex h-[5.6rem] w-full items-center gap-[1.6rem] px-[1.6rem] py-0 hover:border-orange"
      onClick={handleClick}
    >
      <span className="group grid h-[2rem] w-[2rem] place-items-center rounded-full border border-gray100">
        <span
          className={`h-[1rem] w-[1rem] rounded-full bg-orange duration-100 ease-in-out ${
            !checked && 'opacity-0'
          }`}
        />
      </span>
      {label}
    </button>
  );
}
