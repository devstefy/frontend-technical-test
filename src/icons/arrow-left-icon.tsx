export function ArrowLeftIcon({
    color = "#667085",
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
          d="M19 12H5M5 12L12 19M5 12L12 5"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          stroke={color}
        />
      </svg>
    );
}
