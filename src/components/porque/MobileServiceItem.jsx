import React from "react";

const MobileServiceItem = ({
  title,
  children,
  urlimg,
  rl = "justify-start",
  rlIcon = "-left-2",
}) => {
  return (
    <div className={`flex ${rl} `}>
      <div
        className={`  relative h-28 top-3 bg-[rgb(2,12,44)] px-8 gap-2  w-[63%] rounded-lg shadow flex flex-col justify-center items-center`}
      >
        <img
          src={`./vectores/${urlimg}.png`}
          className={`w-10 h-10 absolute top-0 ${rlIcon}`}
          alt=''
        />
        <h1 className='font-bold text-sm text-center'>{title}</h1>
        <p className='text-[8px] '>{children}</p>
      </div>
    </div>
  );
};

export default MobileServiceItem;
