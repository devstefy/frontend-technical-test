export function ArrowNarrowRightIcon({
    color = "#101828",
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
          d="M17 8L21 12M21 12L17 16M21 12H3"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          stroke={color}
        />
      </svg>
    );
}