import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="mb-[2.4rem] pt-[1.6rem] text-base opacity-50 duration-200 ease-in-out hover:text-orange hover:opacity-100 md:pt-[3.3rem]"
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
}
