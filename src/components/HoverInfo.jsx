import React, { useState } from "react";

const HoverComponent = ({
  titulo,
  children,
  positions,
  positionP,
  sizeP = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sizeOfP = sizeP ? "240px" : "200px";
  return (
    <div
      className={`absolute ${positions} h-[180px] w-[${sizeOfP}] transition-all duration-500 ease-in-out text-white text-xs flex justify-center items-center text-center textInfo cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`text-xl w-[200px] absolute inset-0 flex items-center justify-center ${
          isHovered ? "opacity-0" : "opacity-100"
        } transition-all duration-500 ease-in-out`}
      >
        {titulo}
      </span>
      <p
        className={`absolute text-sm w-[200px] ${positionP} inset-0 flex items-center justify-center ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out`}
      >
        {children}
      </p>
    </div>
  );
};

export default HoverComponent;