import React from "react";

const SectionTitle = ({ text, className }) => {
  return (
    <h2
      className={`${className} text-[28px] sm:text-[54px] font-bold sm:leading-[77px] drop-shadow-2xl textTitle`}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
