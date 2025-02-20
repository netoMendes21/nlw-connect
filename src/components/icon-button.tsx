import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {}

const IconButton = ({ className, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        "p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-400",
        className
      )}
      {...props}
    />
  );
};

export default IconButton;
