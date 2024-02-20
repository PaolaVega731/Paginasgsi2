import React from "react";

const ServiceItem = ({ title, description, position }) => {
  return (
    <div
      className={`${position} -2 rounded-lg shadow absolute flex flex-col items-center gap-2 `}
      style={{ width: "19%", height: "12%" }}
    >
      <div className='flex justify-center items-center text-center'>
        <h1 className='text-xl 2xl:text-xl font-bold text-white'>{title}</h1>
      </div>
      <p className='lg:text-sm 2xl:text-sm text-white w-30 text-justify'>
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
