import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full h-16 bg-white z-100 col-span-12 shadow-md fixed">
      <nav className="flex items-center justify-between px-4 h-full">
        <NavLink className="font-heading font-medium text-2xl" to="/">
          InkNotes
        </NavLink>

        <ul className="flex gap-5">
          <li>
            <NavLink to="/sobre" className="font-text cursor-pointer">
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="font-text p-2 bg-mainColor rounded-md text-white tracking-wide shadow-md cursor-pointer"
            >
              Anotar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
