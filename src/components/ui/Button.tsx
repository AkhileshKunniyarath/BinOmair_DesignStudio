import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "ghost";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-8 py-4 uppercase tracking-widest font-semibold text-sm transition-all duration-300",
                variant === "primary" && "bg-brand-950 text-white glow-effect hover:bg-brand-900",
                variant === "outline" && "border border-brand-950 text-brand-950 hover:bg-brand-950 hover:text-white",
                variant === "ghost" && "text-brand-900 hover:text-brand-950",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
