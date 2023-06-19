import * as React from "react";

const CircleX = ({ ...props }) => (
  <svg fill="none" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.707 7.293a1 1 0 0 0-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L10 8.586 8.707 7.293Z"
      fill={props?.color || "#ffffff"}
      fillRule="evenodd"
    />
  </svg>
);

export default CircleX;
