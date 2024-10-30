import React from "react";
import { Search } from "react-iconly";
import { twMerge } from "tailwind-merge";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  containerClassName?: string;
  iconLeft?: number | string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  className,
  containerClassName,
  iconLeft,
}) => {
  return (
    <div className={twMerge("relative w-full", containerClassName)}>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={twMerge(
          "primary-input max-w-[30.625rem] !border-0 !pl-[3.0rem] text-sm placeholder:text-sm placeholder:text-[#979797]",
          className
        )}
      />
      <Search
        size={20}
        style={{
          height: "1.25rem",
          width: "1.25rem",
          position: "absolute",
          top: "50%",
          left: iconLeft,
          transform: "translateY(-50%)",
          color: "#A0AEC0",
        }}
      />
    </div>
  );
};

SearchInput.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  placeholder: "Search",
  className: "",
  containerClassName: "",
  iconLeft: "1rem",
  onFocus: () => {},
  onBlur: () => {},
};
export default SearchInput;
