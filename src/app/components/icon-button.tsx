import React, { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-400"
      {...props}
    />
  );
};

export default IconButton;
