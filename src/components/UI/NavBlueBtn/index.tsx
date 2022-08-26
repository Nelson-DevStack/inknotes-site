import React from 'react';

type NavBlueBtn = {
  handleClick: () => void;
};

const NavBlueBtn = ({ handleClick }: NavBlueBtn) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="font-text p-1 bg-mainColor rounded-md text-white tracking-wide shadow-md cursor-pointer flex items-center transition duration-200 hover:scale-105"
    >
      Anotar
    </button>
  );
};

export default NavBlueBtn;
