import React from "react";

const Logo = ({ sizeLogo }) => {
  return (
    <div className='flex flex-col'>
      <img src={`/ImagenInicio/${sizeLogo}.png`} alt='' />
    </div>
  );
};

export default Logo;
