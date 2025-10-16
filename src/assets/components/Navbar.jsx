import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-6 fixed z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-4xl font-signature cursor-pointer select-none">
        Yudha
      </h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-cyan-400 transition duration-200"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icon Mobile */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Menu Mobile */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-3xl capitalize hover:text-cyan-400 transition duration-200"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
