import React from "react";

const ServiceItem = ({ title, description, position }) => {
  return (
    <div
      className={`${position} -2 rounded-lg shadow absolute flex flex-col items-center gap-2 `}
      style={{ width: "290px", height: "160px" }}
    >
      <div className='flex justify-center items-center text-center'>
        <h1 className='text-xl 2xl:text-2xl font-bold text-white'>{title}</h1>
      </div>
      <p className='text-sm 2xl:text-[16px] text-white w-64 text-justify leading-4'>
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
