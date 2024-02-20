import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const [height, setHeight] = useState("100");
  const [sizeLogo, setSizeLogo] = useState("LogoDefault");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", checkMobile);
    checkMobile();
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <nav
      className={`bg-[#020A21] z-20 bg-opacity-100 flex justify-center items-center h-[${height}] fixed w-[100%]  p-4`}
    >
      <div className='w-full flex items-center justify-between sm:mx-5'>
        <Logo sizeLogo={sizeLogo} />
        {isMobile && !isMenuOpen && (
          <div className='block lg:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'
            >
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
            </button>
          </div>
        )}
        <div
          className={`lg:flex lg:items-center ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className='lg:flex gap-10 mr-10 font-semibold text-lg'>
            <li className='hover:opacity-80 cursor-pointer'>
              <Link
                onClick={handleNavLinkClick}
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
                onClick={handleNavLinkClick}
                activeClass='active'
                to={isMobile ? "workflowMobile" : "workflow"}
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
                onClick={handleNavLinkClick}
                activeClass='active'
                to={isMobile ? "porqueMobile" : "por-que"}
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
                onClick={handleNavLinkClick}
                activeClass='active'
                to={isMobile ? "implementacionMobile" : "implementacion"}
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
                onClick={handleNavLinkClick}
                activeClass='active'
                to={isMobile ? "contactoMobile" : "contacto"}
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
    </nav>
  );
};

export default Navbar;
