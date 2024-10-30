import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface AvatarProps {
  image?: string | null | undefined;
  firstName?: string;
  lastName?: string;
  className?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  firstName,
  lastName,
  alt,
  className,
}) => {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt ? alt : "image"}
        className={twMerge(`object-fit h-7 w-7 rounded-full`, className)}
      />
    );
  }
  if (firstName || lastName) {
    return (
      <div
        className={twMerge(
          `flex h-7 w-7 items-center justify-center rounded-full border border-grey-outline bg-[#F1F7FF] text-xs font-bold text-accent`,
          className
        )}
      >
        <span>
          {firstName?.[0] && firstName?.[0].toLocaleUpperCase()}
          {lastName?.[0] && lastName?.[0].toLocaleUpperCase()}
        </span>
      </div>
    );
  }
  return null;
};

export default Avatar;

Avatar.defaultProps = {
  image: "",
  firstName: "",
  lastName: "",
  alt: "",
  className: "",
};
