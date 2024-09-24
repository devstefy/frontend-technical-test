import { LogoProps } from '../../interfaces/Navigation';


export const Logo = ({
    icon,
    name
  }: LogoProps) => {
  
    return (
        <div className="flex flex-row items-center pt-5 md:pt-0">
        {icon}
        <p
          className={`font-inter text-2xl sm:text-2xl md:text-2xl font-semibold ml-1`}
        >
          {name}
        </p>
      </div>
    );
  };
  