import React from "react";
import { cn } from "~/utils/styles";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { type FC } from "~/utils/types";
import { Popover, type PopoverProps } from "antd";

const DropdownItem = ({ children }: FC) => {
  return <div className="group font-custom text-sm">{children}</div>;
};

type DropDownProps = PopoverProps & {
  label: string;
};
const Dropdown = ({
  children,
  className,
  label,
  ...props
}: FC<DropDownProps>) => {
  return (
    <Popover
      placement="bottom"
      className={cn(
        className,
        "no-ring  flex cursor-pointer items-center no-underline transition-colors duration-300"
      )}
      content={
        <div className="mt-4 w-max divide-y divide-gray-100 rounded-md bg-white px-6 py-4 font-medium text-gray-500">
          {children}
        </div>
      }
      trigger="click"
      {...props}
    >
      {label}
      <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" />
    </Popover>
  );
};
Dropdown.Item = DropdownItem;
export default Dropdown;
