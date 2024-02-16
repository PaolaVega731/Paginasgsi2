import React from "react";

const FooterLink = ({ url, text, className, ...props }) => {
  return (
    <li className={`mb-3 text-light ${className}`}>
      <a href={url} {...props}>
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
