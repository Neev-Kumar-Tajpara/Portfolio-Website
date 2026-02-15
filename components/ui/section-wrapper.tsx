"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgColor?: string; // Tailwind class like "bg-black" or hex
}

export function SectionWrapper({
    children,
    className,
    id,
    bgColor = "bg-background"
}: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={cn(
                "relative min-h-screen py-20 flex flex-col justify-center transition-colors duration-700 ease-in-out",
                bgColor,
                className
            )}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                {children}
            </div>
        </motion.section>
    );
}
