import { StarIcon } from "@/src/icons";
import { CarouselElementProps } from "@/src/interfaces";

export const CarouselElement = ({
  image,
  stars,
  name,
  position,
  company
}: CarouselElementProps) => {
  return (
    <div
        className="min-w-[81vw] md:min-w-[40vw] lg:min-w-[25vw] h-[60vh] lg:h-[70vh] flex flex-col justify-end p-3 mr-6"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
            className="w-full border border-white"
            style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)",
                color: 'white'
            }}
        >
          <div className="bg-white bg-opacity-30 w-full h-full p-3 inset-0">
            <div className="flex space-x-1">
                {Array.from({ length: stars }, (_, index) => (
                <StarIcon
                    key={`star-${index}`}
                    width={18}
                    height={18}
                    color="#FFFFFF"
                />
                ))}
            </div>
            <h2 className="font-inter text-left text-lg md:text-xl lg:text-2xl font-medium text-white mt-3 mb-2">{name}</h2>
            <p className="font-inter text-left text-white mb-1">{position}</p>
            <p className="font-inter text-left text-white mb-1">{company}</p>
          </div>
        </div>
      </div>
  );
};
