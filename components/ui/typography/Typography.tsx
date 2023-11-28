import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const TypographyVariants = cva("", {
  variants: {
    variant: {
      paragraphMuted: "text-muted-foreground",
      HeroText: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
    },
    fontSize: {
      sm: "text-sm",
      lg: "text-lg",
      md: "text-md",
    },
  },
  defaultVariants: {
    variant: "paragraphMuted",
  },
});

interface TypographyProps
  extends React.HTMLProps<
      HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
    >,
    VariantProps<typeof TypographyVariants> {
  attribute?: keyof JSX.IntrinsicElements;
}

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  TypographyProps
>((props, ref) => {
  const { className, variant, attribute = "p", fontSize, children } = props;
  const Comp = React.createElement(
    attribute,
    {
      className: cn(className, TypographyVariants({ variant, fontSize })),
    },
    children,
  );
  return Comp;
});

Typography.displayName = "Typography";

export { Typography, TypographyVariants };
