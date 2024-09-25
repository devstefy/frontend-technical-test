export function DropBoxIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 57" {...props}>
      <g filter="url(#filter0_dd_1454_420)">
        <circle cx="28" cy="28" r="24.5" fill="#0F287F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.25 14L10.5 19.25L19.25 24.5L10.5 29.75L19.25 35L28 29.75L36.75 35L45.5 29.75L36.75 24.5L45.5 19.25L36.75 14L28 19.25L19.25 14ZM28 19.25L36.75 24.5L28 29.75L19.25 24.5L28 19.25Z"
          fill="#DAF8FE"
        />
        <path
          d="M19.25 38.5L28 33.25L36.75 38.5L28 43.75L19.25 38.5Z"
          fill="#DAF8FE"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1454_420"
          x="-3"
          y="-2"
          width="62"
          height="62"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1454_420"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1454_420"
            result="effect2_dropShadow_1454_420"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1454_420"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}