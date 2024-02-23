import React, { useState, useEffect } from "react";

const HoverServicio = ({
  img,
  children,
  positions,
  positionP,
  titulo,
  titulop,
  imgSize = "w-80 h-80",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${positions} w-80 h-80 transition-all duration-500 ease-in-out  absolute text-white text-xs flex justify-center items-center text-center textInfo cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isMobile && (
        <div
          className={`rounded-full relative ${
            isHovered
              ? "opacity-0"
              : "flex flex-col justify-center items-center opacity-100"
          }  transition-all duration-500 ease-in-out absolute inset-0 flex items-center justify-center`}
        >
          <img src={img} className={`rounded-full ${imgSize}`} alt={titulo} />
          <h3 className={`${titulop} absolute bottom-24 ml-3 w-1/3 p-2`}>
            {titulo}
          </h3>
        </div>
      )}
      {(!isMobile || isHovered) && (
        <p
          className={`text-sm ${isMobile ? "w-40" : positionP} ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-all duration-500 ease-in-out absolute inset-0 flex items-center justify-center  w-full px-10`}
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default HoverServicio;