import Image from "next/image";
import React from "react";
import { SheetTrigger } from "../sheet";
import Link from "next/link";
import { buttonVariants } from "../button";
import { ArrowRight } from "lucide-react";

type EmptyCartSectionType = {
  imgUrl?: string;
  imgAlt?: string;
  linkText?: string;
  linkHref?: string;
};

const EmptyCartSection: React.FC<EmptyCartSectionType> = ({
  imgUrl,
  imgAlt,
  linkHref,
  linkText,
}) => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center space-y-1 align-middle">
        {imgUrl ? (
          <div className="relative mb-4 h-60 w-60 text-muted-foreground">
            <Image src={imgUrl} fill alt={imgAlt || "empty cart image"} />
          </div>
        ) : null}
        <div className="text-xl font-semibold">Your cart is empty</div>
        {linkHref ? (
          <SheetTrigger asChild>
            <Link
              href={linkHref}
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "text-sm text-muted-foreground",
              })}
            >
              {linkText} <ArrowRight />
            </Link>
          </SheetTrigger>
        ) : null}
      </div>
    </>
  );
};

export default EmptyCartSection;
