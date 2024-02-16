import React from "react";

const FooterLink = ({ url, text, className, ...props }) => {
  return (
    <li className={`text-light ${className}`}>
      <a href={url} {...props}>
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
