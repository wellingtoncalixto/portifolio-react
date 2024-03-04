import React from "react";

const MenuHamburgerSvg = ({ onClick, ...props }) => {
  return (
    <svg
      width="33"
      height="20"
      viewBox="0 0 33 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <rect width="33" height="4" rx="2" fill="#0077B6" />
      <rect y="8" width="33" height="4" rx="2" fill="#0077B6" />
      <rect y="16" width="33" height="4" rx="2" fill="#0077B6" />
    </svg>
  );
};

export default MenuHamburgerSvg;
