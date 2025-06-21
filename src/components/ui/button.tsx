import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const buttonClasses = [
      "bikramsambat-btn",
      `bikramsambat-btn--${variant}`,
      `bikramsambat-btn--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <Comp ref={ref} className={buttonClasses} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
