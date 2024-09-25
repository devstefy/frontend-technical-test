export function HelpCircleIcon({
  color = "#98A2B3",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      {...props}
    >
      <g clipPath="url(#clip0_1454_729)">
        <path
          d="M6.06 5.99992C6.21674 5.55436 6.5261 5.17866 6.93331 4.93934C7.34051 4.70002 7.81927 4.61254 8.28479 4.69239C8.75031 4.77224 9.17255 5.01427 9.47672 5.3756C9.78089 5.73694 9.94737 6.19427 9.94667 6.66659C9.94667 7.99992 7.94667 8.66659 7.94667 8.66659M8 11.3333H8.00667M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8 14.6666C4.3181 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.3181 1.33325 8 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
          stroke="#98A2B3"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1454_729">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}