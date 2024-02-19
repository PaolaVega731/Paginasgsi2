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
      className={`absolute ${positions} h-[180px] w-[${sizeOfP}]  text-white text-xs  flex justify-center items-center text-center textInfo cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && <span className={`text-xl  w-[200px] `}>{titulo}</span>}
      {isHovered && (
        <p className={`text-sm w-[200px] ${positionP}`}>{children}</p>
      )}
    </div>
  );
};

export default HoverComponent;
