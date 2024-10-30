/* eslint-disable import/no-extraneous-dependencies */
import { Skeleton } from "@mui/material";
import React from "react";
import { SxProps } from "@mui/system";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

interface SkeletonLoaderProps {
  width?: number | string;
  height?: number | string;
  variant?: "text" | "rectangular" | "rounded" | "circular";
  className?: string;
  sx?: SxProps;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width,
  height,
  variant,
  className,
  sx,
}) => {
  return (
    <Skeleton
      height={height}
      width={width}
      sx={sx}
      className={twMerge(classNames("dark:bg-secondary-100", className))}
      variant={variant}
      animation="wave"
    />
  );
};

SkeletonLoader.defaultProps = {
  variant: "rounded",
  height: "0.4rem",
  width: "",
  className: "",
  sx: undefined,
};

export default SkeletonLoader;
