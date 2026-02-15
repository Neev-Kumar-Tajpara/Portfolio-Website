"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function SectionWrapper({
    children,
    className,
    id,
}: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={cn(
                "relative min-h-screen py-20 flex flex-col justify-center bg-background",
                className
            )}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                {children}
            </div>
        </motion.section>
    );
}
