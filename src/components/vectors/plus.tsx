import type { SVGProps } from 'react';

export default function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z"
        fill="#191A23"
      />
    </svg>
  );
}
