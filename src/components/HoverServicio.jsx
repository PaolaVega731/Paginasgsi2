import React, { useState } from "react";

const HoverServicio = ({
  img,
  children,
  positions,
  positionP,
  titulo,
  titulop,
  imgSize = "w-80  h-80",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` ${positions}  w-80 h-80 absolute    text-white text-xs  flex justify-center items-center text-center textInfo`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div className='rounded-full relative  flex flex-col justify-center items-center'>
          <img src={img} className={`rounded-full ${imgSize}`} alt={titulo} />
          <h3 className={`${titulop} absolute bottom-24 ml-3 w-1/3  p-2`}>
            {titulo}
          </h3>
        </div>
      )}
      {isHovered && <p className={`text-sm  ${positionP}`}>{children}</p>}
    </div>
  );
};

export default HoverServicio;
