export function JiraIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" {...props}>
      <path
        d="M51.9133 26.6288L30.1131 5.54382L28 3.5L11.5897 19.372L4.08671 26.6288C3.30443 27.3864 3.30443 28.6136 4.08671 29.3712L19.0793 43.872L28 52.5L44.4103 36.628L44.6644 36.3823L51.9133 29.3712C52.6956 28.6136 52.6956 27.3864 51.9133 26.6288ZM28 35.2439L20.5104 28L28 20.7561L35.4896 28L28 35.2439Z"
        fill="#2684FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.0001 20.7561C23.0965 16.0127 23.0726 8.33002 27.9466 3.55823L11.5564 19.4043L20.477 28.0324L28.0001 20.7561Z"
        fill="url(#paint0_linear_1454_209)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5097 27.9806L28 35.2439C30.3668 37.5317 31.6966 40.6355 31.6966 43.872C31.6966 47.1084 30.3668 50.2122 28 52.5L44.4304 36.6086L35.5097 27.9806Z"
        fill="url(#paint1_linear_1454_209)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1454_209"
          x1="26.6627"
          y1="13.4281"
          x2="14.169"
          y2="18.883"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1454_209"
          x1="29.4311"
          y1="42.4878"
          x2="41.9022"
          y2="37.0716"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
