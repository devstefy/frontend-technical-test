import { MetricElementProps } from "@/src/interfaces";

export const MetricElement = ({
  quantity,
  quantityType,
  name
}: MetricElementProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <span className="font-inter text-5xl text-center text-textBrandTertiary font-bold mt-3">{quantity + quantityType}</span>
        <p className="font-inter text-sm text-center font-bold my-2 mt-3">{name}</p>
    </div>
  );
};
