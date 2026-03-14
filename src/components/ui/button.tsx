import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-accent/5 hover:text-foreground hover:border-accent/30",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
        ghost: "hover:bg-accent/5 hover:text-foreground",
        link: "text-accent underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
        "hero-outline": "border border-border text-foreground hover:bg-accent/5 hover:border-accent/30 hover:text-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
        gradient: "bg-gradient-to-r from-accent to-secondary text-accent-foreground hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
        glow: "bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow transition-all duration-300",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-xl px-3.5",
        lg: "h-12 rounded-2xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
