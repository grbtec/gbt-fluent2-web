"use client"

import * as React from "react"
import { Anchor, Content, Portal, Root, Trigger } from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = Root

const PopoverTrigger = Trigger

const PopoverAnchor = Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(
  (
    { className, container, align = "center", sideOffset = 4, ...props },
    ref
  ) => (
    <Portal container={container}>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          className
        )}
        {...props}
      />
    </Portal>
  )
)
PopoverContent.displayName = Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
