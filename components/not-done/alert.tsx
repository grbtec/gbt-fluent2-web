import { tv } from "tailwind-variants"

import { cn } from "@/lib/utils"

const alertVariants = tv({
  base: "relative w-full rounded-lg border border-slate-200 px-4 py-3 text-sm dark:border-slate-800 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-slate-950 dark:[&>svg]:text-slate-50 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  variants: {
    variant: {
      default: "bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
      destructive:
        "border-red-500/50 text-red-500 dark:border-red-500 dark:border-red-900/50 dark:dark:border-red-900 dark:text-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Alert({ className, variant, ...props }) {
  return (
    <div
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }) {
  return (
    <h5
      className={cn(
        "mb-1 leading-none font-bold font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }) {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertDescription, AlertTitle }
