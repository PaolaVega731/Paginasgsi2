import React from "react";

const Logo = ({ sizeLogo }) => {
  return (
    <div className='w-[30%] sm:w-auto flex flex-col'>
      <img src={`/${sizeLogo}.png`} alt='' />
    </div>
  );
};

export default Logo;
