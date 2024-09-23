export function LightningBoltIcon({
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
          d="M13 3V10H20L11 21V14H4L13 3Z"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          stroke={color}
        />
      </svg>
    );
}
