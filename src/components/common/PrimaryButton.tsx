/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentPropsWithRef, forwardRef } from "react";
import { FiLoader } from "react-icons/fi";
import { VariantProps, cva } from "class-variance-authority";
import classNames from "classnames";

const buttonVariants = cva(
  "text-13 sm:text-15 rounded-10 flex items-center justify-center whitespace-nowrap transition-all duration-300 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "border-accent bg-accent text-white hover:brightness-110 disabled:hover:brightness-100",
        blueOutline:
          "border-accent bg-[#F1F7FF] text-accent hover:shadow-sm hover:brightness-110 disabled:hover:brightness-100",
        redOutline:
          "border-delete bg-[#FFF5F6] text-delete hover:shadow-sm hover:brightness-[105%] disabled:hover:brightness-100",
        greyOutline:
          "border-sub-text bg-[#F9F9F9] text-sub-text hover:shadow-sm hover:brightness-[105%] disabled:hover:brightness-100",
        plainRed:
          "border-transparent bg-white text-delete hover:border-delete hover:bg-[#FFF5F6] disabled:cursor-not-allowed disabled:hover:bg-white",
        plainBlue:
          "border-transparent bg-white text-accent hover:border-accent hover:bg-[#F1F7FF] disabled:cursor-not-allowed disabled:hover:bg-white",
      },
      size: {
        sm: "h-11 border px-2.5",
        md: "h-11 border-2 px-4 hover:bg-white hover:text-accent disabled:hover:border-accent disabled:hover:bg-accent disabled:hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);
type ButtonProps = ComponentPropsWithRef<"button">;
interface PrimaryButtonProps
  extends ButtonProps,
    VariantProps<typeof buttonVariants> {
  type?: "submit" | "button";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      children,
      type,
      icon,
      variant,
      size,
      className,
      iconPosition,
      isLoading,
      loadingText,
      disabled,
      ...buttonProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type === "button" ? "button" : "submit"}
        className={classNames(buttonVariants({ variant, size, className }), {
          "gap-2": icon,
          "flex-row-reverse": iconPosition === "right",
          "cursor-not-allowed hover:brightness-100": disabled || isLoading,
          "opacity-50": disabled,
          "opacity-80 ": isLoading,
        })}
        disabled={disabled || isLoading}
        {...buttonProps}
      >
        {!isLoading && icon}
        {isLoading ? (
          <div className="flex items-center gap-1 leading-none">
            <FiLoader className="animate-spin text-xl" />{" "}
            {loadingText || children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

PrimaryButton.defaultProps = {
  type: "button",
  disabled: false,
  isLoading: false,
  loadingText: "",
  icon: undefined,
  iconPosition: "left",
};

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;

export { buttonVariants };
