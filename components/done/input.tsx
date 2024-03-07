"use client"

import * as React from "react"
import { HTMLAttributes, ReactElement, useCallback, useState } from "react"
import { VscError, VscPassFilled, VscWarning } from "react-icons/vsc"
import { tv, VariantProps } from "tailwind-variants"

const icons = {
  neutral: "",
  success: <VscPassFilled className="inline text-green-600" />, // Checkmark character
  fail: <VscError className="inline text-red-600" />, // Crossmark character
  warning: <VscWarning className="inline text-yellow-600" />, // Optional warning icon
  // Add more states and icons as needed
}

const inputVariants = tv({
  slots: {
    root: "flex flex-col",
    decoration: "aki",
    label: "py-1 text-black dark:text-white",
    input:
      "flex w-full rounded-md bg-transparent px-4 py-2 text-sm shadow-sm outline-0",
  },
  variants: {
    variant: {
      focus: { input: "border-b-2 border-gray-500" },
      outline: { input: "border-[1px]" },
      filledDark: { input: "dark:bg-dark/90" },
      filledLight: { input: "dark:bg-white/90" },
    },
    state: {
      neutral: {
        input: "",
      },
      success: {
        input: "border-green-500",
      },
      fail: {
        label: "text-red-500 dark:text-red-500",
        input: "border-red-500/80",
      },
      warning: {
        input: "border-yellow-500/80",
      },
    },
    iconOnly: {
      true: {
        input: "border-black/80 dark:border-white/80",
      },
    },
    bottomBar: {
      false: "",
      true: {
        decoration:
          "relative  h-fit overflow-hidden rounded-md transition-all before:absolute before:bottom-0 before:left-[50%] before:h-full before:max-h-[0px] before:w-full before:max-w-[0px] before:translate-x-[-50%] before:scale-y-[1] before:bg-[#106CBD] before:text-white before:transition-all before:content-['']",
      },
    },
    focus: {
      true: {
        decoration: "before:max-h-[3px] before:max-w-full before:scale-y-[1.0]",
      },
    },
    active: {
      true: {
        decoration:
          "before:max-h-[3px] before:max-w-full before:scale-y-[1.0] before:bg-gray-500",
      },
    },
  },

  defaultVariants: {
    variant: "filledLight",
    size: "md",
  },
})

export interface InputPropsType
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  helperText?: string
  labelText?: string
  state?: keyof typeof icons
  iconOnly?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const {
      className,
      labelText,
      helperText,
      variant = "outline",
      state = "neutral",
      iconOnly = false,
      ...rest
    } = props

    const { input, root, decoration, label } = inputVariants()

    const [focus, setFocus] = useState(false)
    const [active, setActive] = useState(false)
    const bottomBar = iconOnly || state === "neutral"

    // By using useCallback the function doesn't get recreated on a new
    // memory reference every time the component re-renders.
    const handleFocus = useCallback(() => {
      setFocus(true)
    }, [])

    const handleBlur = useCallback(() => {
      setFocus(false)
    }, [])

    const handleMouseDown = useCallback(() => {
      setActive(true)
    }, [])

    const handleMouseUp = useCallback(() => {
      setActive(false)
    }, [])
    //-------------------------------------------------------------//

    const uid =
      "inputUID:" +
      Date.now().toString(36) +
      Math.random().toString(36).substr(2)

    return (
      <div className={root()}>
        <div className={decoration({ bottomBar, focus, active })}>
          {labelText && (
            <label htmlFor={uid} className={label({ state })}>
              {labelText}
            </label>
          )}
          <input
            id={uid}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={input({
              className,
              iconOnly: iconOnly,
              state,
              variant,
            })}
            ref={ref}
            {...rest}
          />
        </div>
        {helperText && (
          <IconComponent iconOnly={iconOnly} state={state}>
            {helperText}
          </IconComponent>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

const iconComponent = tv({
  slots: {
    base: "flex items-center gap-1",
  },
  variants: {
    state: {
      neutral: {
        base: "",
      },
      success: {
        base: "text-green-500/80",
      },
      fail: {
        base: "text-red-500/80",
      },
      warning: {
        base: "text-yellow-500/80",
      },
    },
    iconOnly: {
      true: {
        base: "flex text-black/80 dark:text-white/80",
      },
    },
  },
})

type props = HTMLAttributes<HTMLSpanElement> & {
  state: keyof typeof icons
  iconOnly: boolean
}

function IconComponent({
  state,
  className,
  iconOnly,
  children,
  ...rest
}: props): ReactElement {
  const { base } = iconComponent({ state })

  return (
    <span {...rest} className={base({ className, iconOnly: iconOnly })}>
      {icons[state]}
      <span>{children}</span>
    </span>
  )
}

export { IconComponent, Input, inputVariants }
