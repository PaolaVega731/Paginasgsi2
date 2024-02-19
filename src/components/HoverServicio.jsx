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

    handleResize(); // Llamamos a la función para inicializar el estado

    window.addEventListener("resize", handleResize); // Suscripción al evento resize

    return () => {
      window.removeEventListener("resize", handleResize); // Desuscripción del evento resize
    };
  }, []);

  return (
    <div
      className={`${positions} w-80 h-80 absolute text-white text-xs flex justify-center items-center text-center textInfo cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isMobile && (
        <div
          className={`rounded-full relative ${
            isHovered ? "hidden" : "flex flex-col justify-center items-center"
          }`}
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
            isHovered ? "" : "hidden"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default HoverServicio;
