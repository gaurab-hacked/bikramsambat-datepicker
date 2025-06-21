import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

// Popover Root
interface PopoverProps
  extends React.ComponentProps<typeof PopoverPrimitive.Root> {
  children: React.ReactNode;
}

function Popover({ children, ...props }: PopoverProps) {
  return (
    <PopoverPrimitive.Root modal={false} {...props}>
      {children}
    </PopoverPrimitive.Root>
  );
}

// Popover Trigger
interface PopoverTriggerProps
  extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {
  children: React.ReactNode;
}

function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger asChild {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
}

// Popover Content
interface PopoverContentProps
  extends React.ComponentProps<typeof PopoverPrimitive.Content> {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

function PopoverContent({
  children,
  className = "",
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal container={document.body}>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={`bikramsambat-popover-content ${className}`}
        style={{
          zIndex: 999999999,
          position: "relative",
        }}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

// Popover Anchor (optional)
interface PopoverAnchorProps
  extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {
  children?: React.ReactNode;
}

function PopoverAnchor({ children, ...props }: PopoverAnchorProps) {
  return (
    <PopoverPrimitive.Anchor {...props}>{children}</PopoverPrimitive.Anchor>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
