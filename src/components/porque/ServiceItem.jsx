import React from "react";

const ServiceItem = ({ title, description, position }) => {
  return (
    <div
      className={`${position} -2 rounded-lg shadow absolute flex flex-col items-center gap-2 h-32 w-[20%] lg:w-[25%] `}
    >
      <div className="flex justify-center items-center text-center">
        <h1 className="text-lg 2xl:text-3xl xl:text-2xl font-bold text-white">
          {title}
        </h1>
      </div>
      <p className="lg:text-xs 2xl:text-xl xl:text-base text-white w-30 text-pretty text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;