"use client"

import * as React from "react"
import { Fragment } from "react"
import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { tv } from "tailwind-variants"

const accordionSlots = tv({
  slots: {
    accordionItemStyles: "relative flex flex-col gap-1",

    // ---group--- //
    headerStyles: "flex items-center bg-transparent",
    triggerStyles:
      "flex flex-1 items-center gap-2 text-sm font-medium transition-all dark:text-white [&[data-state=open]>svg]:rotate-90",
    iconStyles:
      "h-4 w-4 shrink-0 text-black transition-transform duration-200 dark:text-white",
    // ---group--- //

    contentStyles:
      "overflow-hidden bg-transparent text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-white",
  },
  variants: {
    position: {
      right: { triggerStyles: "flex-row-reverse justify-between" },
      left: { iconStyles: "" },
    },
    inline: {
      true: {
        headerStyles: "inline",
      },
    },
    size: {
      sm: {
        triggerStyles: "text-xs",
        iconStyles: "h-3 w-3",
      },
      md: {
        triggerStyles: "text-sm",
        iconStyles: "h-4 w-4",
      },
      lg: {
        triggerStyles: "text-lg",
        iconStyles: "h-6 w-6",
      },
      xl: {
        triggerStyles: "text-xl",
        iconStyles: "h-8 w-8",
      },
    },
  },
  defaultVariants: {
    position: "right",
    size: "md",
  },
})

const {
  accordionItemStyles,
  headerStyles,
  triggerStyles,
  iconStyles,
  contentStyles,
} = accordionSlots({
  // size,
})

const Accordion = ({ children, className, ...props }: any) => {
  return (
    <Root {...props} className={className + " flex flex-col gap-3"}>
      {children}
    </Root>
  )
}

Accordion.displayName = "Accordion"
//----------------------------------------//

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  // const [size] = getcontext()
  return (
    <Item ref={ref} className={accordionItemStyles({ className })} {...props} />
  )
})

AccordionItem.displayName = "AccordionItem"
//----------------------------------------//

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(
  (
    {
      className,
      as = "div",
      inline = false,
      icon,
      position,
      size,
      children,
      ...props
    },
    ref
  ) => {
    const validTags = ["div", "h1", "h2", "h3", "h4", "h5", "h6"]
    let Component = Fragment
    const isValid = validTags.includes(as)
    if (isValid) {
      Component = as
    }
    console.assert(
      isValid,
      'Invalid "as" prop. Must be ' + validTags.join(", ")
    )

    return (
      <Header asChild={isValid} className={headerStyles({ inline })}>
        <Component>
          <Trigger
            ref={ref}
            className={triggerStyles({
              className,
              size,
              position,
            })}
            {...props}
          >
            {icon ? (
              icon
            ) : (
              <ChevronRightIcon className={iconStyles({ size })} />
            )}
            {children}
          </Trigger>
        </Component>
      </Header>
    )
  }
)

AccordionTrigger.displayName = Trigger.displayName
//----------------------------------------//

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content ref={ref} className={contentStyles({ className })} {...props}>
    <div className={contentStyles({ className })}>{children}</div>
  </Content>
))
AccordionContent.displayName = Content.displayName
//----------------------------------------//

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
