import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { ModalContext } from '../../contexts/ModalContext';

const Navbar = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleWriteClick = () => {
    return location.pathname !== '/' ? navigate('/') : setShowModal(!showModal);
  };

  return (
    <header className="w-full h-16 bg-white z-50 col-span-12 shadow-md fixed">
      <nav className="flex items-center justify-between px-4 h-full">
        <NavLink className="font-heading font-medium text-2xl" to="/">
          InkNotes
        </NavLink>

        <ul className="flex gap-5">
          <li className="flex items-center">
            <NavLink to="/sobre" className="font-text cursor-pointer">
              Sobre
            </NavLink>
          </li>
          <li className="flex items-center">
            <button
              type="button"
              onClick={handleWriteClick}
              className="font-text p-1 bg-mainColor rounded-md text-white tracking-wide shadow-md cursor-pointer flex items-center"
            >
              Anotar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
