import React from "react";

const CloseIconSvg = ({ onClick, ...props }) => {
  return (
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <rect
        x="3.07903"
        y="1.05188"
        width="33"
        height="4"
        rx="2"
        transform="rotate(44.2608 3.07903 1.05188)"
        fill="#fff"
      />
      <rect
        x="0.551891"
        y="24.421"
        width="33"
        height="4"
        rx="2"
        transform="rotate(-45.7392 0.551891 24.421)"
        fill="#fff"
      />
    </svg>
  );
};

export default CloseIconSvg;
