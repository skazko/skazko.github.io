import React from "react";

export const IconMoon = props => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="#ffe500"
    stroke="#222222"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const IconSun = props => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffe500"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx={12} cy={12} r={5} />
    <path d="M12 1L12 3" />
    <path d="M12 21L12 23" />
    <path d="M4.22 4.22L5.64 5.64" />
    <path d="M18.36 18.36L19.78 19.78" />
    <path d="M1 12L3 12" />
    <path d="M21 12L23 12" />
    <path d="M4.22 19.78L5.64 18.36" />
    <path d="M18.36 5.64L19.78 4.22" />
  </svg>
);
