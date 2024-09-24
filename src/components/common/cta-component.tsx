import { CTAButtons, HeaderComponent } from "@/src";
import { CTAComponentProps } from "@/src/interfaces";

export const CTAComponent = ({
  title,
  description,
  actions
}: CTAComponentProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-left p-10 md:p-16">
        <HeaderComponent
            title={title?.text}
            titleColor={title?.color ?? ""}
            description={description?.text}
            descriptionColor={description?.color}
            textAlign="text-left"
            descriptionFullWidth
        ></HeaderComponent>
        <CTAButtons actions={actions}></CTAButtons>
    </div>
  );
};
