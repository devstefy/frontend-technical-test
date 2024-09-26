import { CTAActionProps, CTAButtonsProps } from "@/src/interfaces";

export const CTAButtons = ({ actions, padding = "px-0 py-4", margin = "my-7 md:my-10", fontSize = "", grid = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", width = "w-full" }: CTAButtonsProps) => {
  return (
    <div className={`${width} ${grid} gap-4 ${margin}`}>
      {actions.map((action: CTAActionProps, index: number) => (
        <button 
            key={`action-button-${index}`}
            className={`font-inter font-medium ${fontSize} ${padding} rounded-lg hover:opacity-80 ${action.text?.color} ${action.background} ${action.border}`}
        >{action.text?.text}</button>
      ))}
    </div>
  );
};
