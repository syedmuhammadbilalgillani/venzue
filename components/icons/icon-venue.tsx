import React from "react";

const IconVenue = ({ active }: { active?: boolean }) => {
  const color = active ? "white" : "#5E5E5E";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.66699C6.31811 1.66699 3.33333 4.65176 3.33333 8.33366C3.33333 13.3337 10 18.3337 10 18.3337C10 18.3337 16.6667 13.3337 16.6667 8.33366C16.6667 4.65176 13.6819 1.66699 10 1.66699Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.8337C11.3807 10.8337 12.5 9.71437 12.5 8.33366C12.5 6.95295 11.3807 5.83366 10 5.83366C8.61929 5.83366 7.5 6.95295 7.5 8.33366C7.5 9.71437 8.61929 10.8337 10 10.8337Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconVenue;
