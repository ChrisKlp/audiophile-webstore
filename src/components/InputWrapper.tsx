import React from 'react';

type Props = {
  label: string;
  error?: string;
  children: React.ReactElement;
};

export default function InputWrapper({ label, error, children }: Props) {
  return (
    <label htmlFor={label} className="group flex flex-col">
      <div className="mb-[0.9rem] flex justify-between ">
        <span className="input-label">{label}</span>
        {error && <span className="input-error">{error}</span>}
      </div>
      {children}
    </label>
  );
}
