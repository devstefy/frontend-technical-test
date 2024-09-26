import { SpinnerProps } from "@/src/interfaces";

export const Spinner = ({ width = 'w-8', height = 'h-8', borderStyle = 'border-solid', borderSize = 'border-4' }: SpinnerProps) => {
  return (
    <div className={`flex items-center justify-center h-[100vh] w-[100vw] }`}>
      <div className={`${height} ${width} ${borderStyle} ${borderSize} border-t-transparent animate-spin rounded-full border-primary`}></div>
    </div>
  );
};
