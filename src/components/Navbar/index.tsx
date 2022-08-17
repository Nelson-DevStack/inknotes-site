import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-16 bg-white z-100 col-span-12 shadow-md fixed">
      <nav className="flex items-center justify-between px-4 h-full">
        <a className="font-heading font-medium text-2xl" href="/">
          InkNotes
        </a>

        <ul className="flex gap-5">
          <li>
            <a className="font-text cursor-pointer">Sobre</a>
          </li>
          <li>
            <a className="font-text p-2 bg-mainColor rounded-md text-white tracking-wide shadow-md cursor-pointer">Anotar</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
