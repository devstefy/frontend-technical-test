
export function ChevronDownIcon({
    color = "#475467",
    ...props
  }: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        stroke={color}
        {...props}
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          strokeWidth="1.6666" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          stroke={color}
        />
      </svg>
    );
}
