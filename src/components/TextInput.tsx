/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  id: string;
  label?: string;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({
  type = 'text',
  label,
  id,
  placeholder,
  value,
  checked,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[id]?.message;

  return (
    <label htmlFor={id} className={`group flex flex-col `}>
      <div className="mb-[0.9rem] flex justify-between">
        {label && <span className="input-label">{label}</span>}
        {type !== 'radio' &&
          errorMessage &&
          typeof errorMessage === 'string' && (
            <span className="input-error">{errorMessage}</span>
          )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input group-hover:border-orange ${
          errorMessage && 'border-1 border-red'
        } ${
          type === 'number' && '[&::-webkit-inner-spin-button]:appearance-none'
        }`}
        value={value}
        checked={checked}
        {...register(id, { valueAsNumber: type === 'number' })}
      />
    </label>
  );
}
