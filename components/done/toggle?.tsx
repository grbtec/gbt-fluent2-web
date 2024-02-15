// "use client"
//
// import * as React from "react"
// import * as TogglePrimitive from "@radix-ui/react-toggle"
// import {cn} from "@/lib/utils"
// import {tv, VariantProps} from "tailwind-variants";
//
// const toggleVariants = tv(
//     {
//         base: "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-600 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:border-b-2 data-[state=on]:border-brandColor-secondary data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-400 dark:data-[state=on]:border-b-brandColor-primary  dark:data-[state=on]:bg-slate-800 dark:data-[state=on]:border-b-2  dark:data-[state=on]:text-slate-50",
//         variants: {
//             variant: {
//                 default: "bg-transparent",
//                 outline:
//                     "border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50",
//             },
//             size: {
//                 default: "h-9 px-3",
//                 sm: "h-8 px-2",
//                 lg: "h-10 px-3",
//             },
//         },
//         defaultVariants: {
//             variant: "default",
//             size: "default",
//         },
//     }
// )
//
// const Toggle = React.forwardRef<
//     React.ElementRef<typeof TogglePrimitive.Root>,
//     React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
//     VariantProps<typeof toggleVariants>
// >(({className, variant, size, ...props}, ref) => (
//     <TogglePrimitive.Root
//         ref={ref}
//         className={cn(toggleVariants({variant, size, className}))}
//         {...props}
//     />
// ))
//
// Toggle.displayName = TogglePrimitive.Root.displayName
//
// export {Toggle, toggleVariants}
/** Toggle dont exist in the fluent 2 */