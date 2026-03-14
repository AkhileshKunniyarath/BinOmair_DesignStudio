"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
    value: number;
    label: string;
    duration?: number;
    suffix?: string;
    valueClassName?: string;
    labelClassName?: string;
}

export function AnimatedCounter({
    value,
    label,
    duration = 2,
    suffix = "+",
    valueClassName,
    labelClassName,
}: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = value / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className={cn("text-4xl md:text-5xl font-serif text-white font-bold mb-2", valueClassName)}
            >
                {count}
                {suffix}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={cn("text-brand-800 text-sm md:text-base tracking-widest uppercase font-medium", labelClassName)}
            >
                {label}
            </motion.div>
        </div>
    );
}
