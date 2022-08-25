import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  previousPage?: boolean;
};

const BackButton = (previousPage: BackButtonProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    return !previousPage ? navigate(-1) : navigate('/');
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-gray-300"
    >
      <BiArrowBack />
    </button>
  );
};

export default BackButton;
