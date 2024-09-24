
export function MinusCircleIcon({
    color = "#98A2B3",
    ...props
  }: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        {...props}
      >
        <path
          d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          stroke={color}
        />
      </svg>
    );
}
