"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Circle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 26, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.32]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.24)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.44),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge,
    title1 = "Elevate Your Digital Vision",
    title2,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {badge && (
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                        >
                            <Circle className="h-2 w-2 fill-rose-500/80" />
                            <span className="text-sm text-white/60 tracking-wide">
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight font-syne">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            {title2 && (
                                <>
                                    <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                        {title2}
                                    </span>
                                </>
                            )}
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-8"
                    >
                        <p className="text-lg sm:text-xl text-white/70 mb-2 font-light tracking-wide">
                            AI Engineer & Full-Stack Developer
                        </p>
                        <p className="text-sm text-white/45 font-light tracking-wide">
                            UCSD Math & CS · GPA 3.9
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-white/[0.18] border border-white/[0.35] text-white text-sm font-medium hover:bg-white/[0.26] hover:border-white/[0.50] transition-all duration-300"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.10] text-white/70 text-sm hover:bg-white/[0.07] hover:border-white/[0.18] hover:text-white/90 transition-all duration-300"
                        >
                            Get in touch →
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/30"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </div>
    );
}

function GeometricBackground() {
    const { scrollY } = useScroll();
    const overlayOpacity = useTransform(scrollY, [0, 900], [0, 1]);

    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.11] via-transparent to-rose-500/[0.11] blur-3xl" />

            {/* Large shapes — hidden on mobile, visible on md+ */}
            <ElegantShape
                delay={0.3}
                width={600}
                height={140}
                rotate={12}
                gradient="from-indigo-500/[0.32]"
                className="hidden md:block left-[-5%] top-[20%]"
            />
            <ElegantShape
                delay={0.5}
                width={500}
                height={120}
                rotate={-15}
                gradient="from-rose-500/[0.32]"
                className="hidden md:block right-[0%] top-[75%]"
            />

            {/* Medium shapes — scaled down on mobile */}
            <ElegantShape
                delay={0.4}
                width={300}
                height={80}
                rotate={-8}
                gradient="from-violet-500/[0.22]"
                className="left-[-15%] md:left-[10%] bottom-[8%] md:bottom-[10%] scale-50 md:scale-100"
            />
            <ElegantShape
                delay={0.6}
                width={200}
                height={60}
                rotate={20}
                gradient="from-amber-500/[0.22]"
                className="right-[-5%] md:right-[20%] top-[8%] md:top-[15%] scale-75 md:scale-100"
            />
            <ElegantShape
                delay={0.7}
                width={150}
                height={40}
                rotate={-25}
                gradient="from-cyan-500/[0.22]"
                className="left-[5%] md:left-[25%] top-[3%] md:top-[10%] scale-75 md:scale-100"
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, var(--background) 0%, transparent 40%, color-mix(in srgb, var(--background) 80%, transparent) 100%)"
                }}
            />
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: overlayOpacity,
                    background: "var(--background)"
                }}
            />
        </div>
    );
}

export { HeroGeometric, GeometricBackground }
