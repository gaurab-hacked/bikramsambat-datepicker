import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../lib/utils";

// Popover Root with modal prop for Dialog compatibility
function Popover({
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return (
    <PopoverPrimitive.Root modal {...props}>
      {children}
    </PopoverPrimitive.Root>
  );
}

// Trigger for Popover
function PopoverTrigger({
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger asChild {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
}

// Popover Content with optional portal disabling
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  disablePortal = false,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> & {
  disablePortal?: boolean;
}) {
  const content = (
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-[9999] bg-popover text-popover-foreground border p-4 rounded-md shadow-md outline-none w-72",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  );

  return disablePortal ? (
    content
  ) : (
    <PopoverPrimitive.Portal>{content}</PopoverPrimitive.Portal>
  );
}

// Optional anchor if needed
function PopoverAnchor(
  props: React.ComponentProps<typeof PopoverPrimitive.Anchor>
) {
  return <PopoverPrimitive.Anchor {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
