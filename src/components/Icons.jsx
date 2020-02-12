import React from 'react';

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

export const IconGithub = props => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

export const IconEMail = props => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6L12 13 2 6" />
  </svg>
);

export const IconTelegram = props => (
  <svg
    x="0px"
    y="0px"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.572 3.012a2.24 2.24 0 00-1.056.16c-.45.177-7.502 3.143-14.075 5.91l-2.171.914c-.841.341-1.266.896-1.266 1.643 0 .523.221 1.232 1.277 1.65l3.666 1.469c.317.95 1.054 3.159 1.239 3.746.11.348.387 1.225 1.09 1.43.143.049.294.074.447.074.443 0 .762-.206.918-.326l2.33-1.971 2.83 2.617c.109.111.686.672 1.46.672.968 0 1.701-.805 1.854-1.584.083-.427 2.813-14.129 2.813-14.127.245-1.099-.196-1.669-.479-1.912a1.59 1.59 0 00-.877-.365zm-.662 2.16c-.377 1.89-2.432 12.206-2.744 13.693l-4.137-3.826-2.806 2.377.777-3.041s5.363-5.428 5.686-5.744c.26-.253.314-.342.314-.43 0-.117-.06-.201-.2-.201-.124 0-.294.12-.384.176-1.143.713-6.012 3.486-8.408 4.85l-3.477-1.39 1.688-.708c4.299-1.81 11.955-5.034 13.691-5.756z" />
  </svg>
);

export const IconMenuDots = (props) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={19} cy={12} r={1} />
    <circle cx={5} cy={12} r={1} />
  </svg>
);

export const IconMenuClose = props => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);
