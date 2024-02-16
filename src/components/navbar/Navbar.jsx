import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const [height, setHeight] = useState("100");
  const [sizeLogo, setSizeLogo] = useState("LogoDefault");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setHeight("80px");
      setSizeLogo("LogoScroll");
    } else {
      setSizeLogo("LogoDefault");
      setHeight("100px");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-[#020A21] z-10 bg-opacity-100 flex justify-center items-center h-[${height}] fixed w-full p-4`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Logo sizeLogo={sizeLogo} />
        <div className='block lg:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
          >
            {isMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <div
            className={`lg:flex lg:items-center ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <ul className='lg:flex gap-10 mr-10 font-semibold text-lg'>
              <li className='hover:opacity-80 cursor-pointer'>
                <Link
                  onClick={closeMenu}
                  activeClass='active'
                  to='inicio'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li className='hover:opacity-80 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='workflow'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Workflow
                </Link>
              </li>
              <li className='hover:opacity-80 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='por-que'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ¿Por qué?
                </Link>
              </li>
              <li className='hover:opacity-80 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='implementacion'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Implementación
                </Link>
              </li>
              <li className='hover:opacity-80 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='contacto'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
