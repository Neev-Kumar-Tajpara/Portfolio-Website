'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

import { Repository } from '@/lib/schemas';

interface LandingClientProps {
    projectsCount: number | string;
    researchCount: number | string;
    researchRepos: Repository[];
    projectRepos: Repository[];
}

export function LandingClient({ projectsCount, researchCount, researchRepos, projectRepos }: LandingClientProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative w-full bg-background text-foreground selection:bg-primary selection:text-white overflow-hidden">

            {/* Background Grids */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            {/* SECTION 1: HERO */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b border-grid-line overflow-hidden pt-20">
                <div className="relative z-10 max-w-[1920px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-2 mb-8"
                    >
                        <div className="font-mono text-data-blue text-sm md:text-base mb-4 tracking-widest uppercase flex items-center gap-2">
                            <span className="w-2 h-2 bg-data-blue animate-pulse rounded-full"></span>
                            PHASE :: PROBABILITY & RISK FOUNDATIONS
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-primary font-sans font-black text-[12vw] leading-[0.85] tracking-tighter uppercase mix-blend-screen select-none"
                    >
                        Neev Kumar<br />Tajpara
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 md:mt-24 border-t border-grid-line pt-8"
                    >
                        <div className="col-span-1 md:col-span-4 font-mono text-sm text-gray-400">
                            <p className="uppercase mb-2 text-white">Definition_</p>
                            <p>Designing systematic trading systems grounded in probability, risk, and disciplined execution.<br />Focused on understanding drawdowns, regime shifts, and non-linear market behavior.</p>
                        </div>
                        <div className="col-span-1 md:col-span-4 font-mono text-sm text-gray-400">
                            <p className="uppercase mb-2 text-white">Vector_</p>
                            <p>Probability & Statistics.<br />Volatility & Derivatives Modeling.<br />Systematic Strategy Design & Backtesting.</p>
                        </div>
                        <div className="col-span-1 md:col-span-4 flex justify-end items-end">
                            <Link href="/projects" className="bg-white text-black font-mono font-bold uppercase text-sm px-8 py-4 hover:bg-primary hover:text-white transition-colors duration-200 w-full md:w-auto border border-white hover:border-primary">
                                Explore Progress -&gt;
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-0 w-full border-t border-grid-line bg-background py-3 font-mono text-xs uppercase text-primary/80 overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="whitespace-nowrap flex gap-4"
                    >
                        <span>LATENCY: 0.004ms /// VOLATILITY: HIGH /// STATUS: ARBITRAGE ACTIVE /// EXECUTION: ALGO_X99 /// PAIR: BTC/USD /// SKEW: NEGATIVE /// LATENCY: 0.004ms /// VOLATILITY: HIGH /// STATUS: ARBITRAGE ACTIVE /// EXECUTION: ALGO_X99 /// PAIR: BTC/USD /// SKEW: NEGATIVE ///</span>
                        <span>LATENCY: 0.004ms /// VOLATILITY: HIGH /// STATUS: ARBITRAGE ACTIVE /// EXECUTION: ALGO_X99 /// PAIR: BTC/USD /// SKEW: NEGATIVE /// LATENCY: 0.004ms /// VOLATILITY: HIGH /// STATUS: ARBITRAGE ACTIVE /// EXECUTION: ALGO_X99 /// PAIR: BTC/USD /// SKEW: NEGATIVE ///</span>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: ABOUT (INVERTED) */}
            <section className="bg-primary text-charcoal py-24 md:py-40 border-b border-charcoal relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                <div className="px-6 md:px-12 max-w-[1920px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="font-sans font-bold text-6xl md:text-8xl leading-[0.9] tracking-tight uppercase mb-8 text-black"
                            >
                                VOLATILITY,<br />RISK &<br />REGIME STRUCTURE.
                            </motion.h2>
                            <div className="h-2 w-24 bg-black mb-8"></div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-between">
                            <div className="font-mono text-lg font-medium leading-relaxed border-l-2 border-black pl-6 text-black">
                                <p className="mb-6">
                                    Markets are not random — they are conditional.
                                </p>
                                <p className="mb-6">
                                    My work focuses on understanding how volatility clusters, how drawdowns propagate, and how trading systems behave across structural regime shifts. Rather than chasing prediction, I study stability — stress-testing assumptions, modeling non-linearity, and building systems designed to survive uncertainty.
                                </p>
                                <p className="mb-6">
                                    The objective is disciplined, repeatable decision-making grounded in probability and risk.
                                </p>
                                <p className="mb-6">
                                    I am a Computer Science & Engineering student focused on building strong mathematical foundations in probability, statistics, and market modeling.
                                </p>
                                <p className="mb-6">
                                    My interests lie in systematic trading systems, volatility research, and risk-aware portfolio design. I prioritize process over prediction — studying how models behave under stress, across regimes, and through drawdowns.
                                </p>
                                <p>
                                    Long-term, I aim to work at the intersection of derivatives, volatility, and quantitative research — where non-linear payoffs and structural risk matter most.
                                </p>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-4 font-mono text-xs font-bold uppercase border-t border-black/30 pt-6 text-black">
                                <div>
                                    <span className="block text-black/60 mb-1">Active Research Papers:</span>
                                    <span className="text-2xl">{researchCount}</span>
                                </div>
                                <div>
                                    <span className="block text-black/60 mb-1">Systematic Models Built:</span>
                                    <span className="text-2xl">{projectsCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: RESEARCH PREVIEW */}
            <section className="bg-background py-24 border-b border-grid-line relative">
                <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-grid-line pb-8">
                        <h3 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-white">Research<span className="text-primary">.</span></h3>
                        <Link href="/research" className="font-mono text-data-blue text-sm uppercase mt-4 md:mt-0 hover:underline decoration-data-blue underline-offset-4">[ Index_03 :: Peer Reviewed ]</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-grid-line border border-grid-line">
                        {researchRepos.slice(0, 6).map((repo, idx) => (
                            <div key={repo.id} className="bg-background p-8 md:p-10 group hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer h-full flex flex-col justify-between">
                                <Link href={repo.html_url} target="_blank" className="h-full flex flex-col justify-between">
                                    <div>
                                        <div className="font-mono text-xs text-primary group-hover:text-black mb-4 uppercase flex justify-between">
                                            <span>Paper_{String(idx + 1).padStart(2, '0')}</span>
                                            <span>{repo.pushed_at ? new Date(repo.pushed_at).getFullYear() : '2024'}</span>
                                        </div>
                                        <h4 className="text-3xl font-sans font-bold uppercase leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300 break-words">
                                            {repo.name.replace(/-/g, ' ')}
                                        </h4>
                                        <p className="font-mono text-xs text-gray-500 group-hover:text-black/70 mt-4 leading-relaxed line-clamp-4">
                                            {repo.description || "No description available."}
                                        </p>
                                    </div>
                                    <div className="mt-12 flex justify-between items-center border-t border-grid-line group-hover:border-black pt-4">
                                        <span className="font-mono text-xs uppercase">View Code</span>
                                        <span className="text-sm transform group-hover:rotate-45 transition-transform">↗</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: PROJECTS GRID (Formerly Infrastructure) */}
            <section className="bg-background py-24 border-b border-grid-line">
                <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-grid-line pb-8">
                        <h3 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-white">Projects<span className="text-primary">.</span></h3>
                        <Link href="/projects" className="font-mono text-data-blue text-sm uppercase mt-4 md:mt-0 hover:underline decoration-data-blue underline-offset-4">[ Index_04 :: Systematic Systems ]</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-grid-line border border-grid-line">
                        {projectRepos.slice(0, 6).map((repo, idx) => (
                            <div key={repo.id} className="bg-background p-8 md:p-10 group hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer h-full flex flex-col justify-between">
                                <Link href={repo.html_url} target="_blank" className="h-full flex flex-col justify-between">
                                    <div>
                                        <div className="font-mono text-xs text-primary group-hover:text-black mb-4 uppercase flex justify-between">
                                            <span>Sys_{String(idx + 1).padStart(2, '0')}</span>
                                            <span>{repo.language || 'N/A'}</span>
                                        </div>
                                        <h4 className="text-2xl font-sans font-bold uppercase leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300 break-words">
                                            {repo.name.replace(/-/g, ' ')}
                                        </h4>
                                        <p className="font-mono text-xs text-gray-500 group-hover:text-black/70 mt-4 leading-relaxed line-clamp-3">
                                            {repo.description || "System architecture and implementation details."}
                                        </p>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {repo.topics.slice(0, 3).map(topic => (
                                                <span key={topic} className="text-[10px] font-mono border border-grid-line px-1 py-0.5 group-hover:border-black/20 text-gray-400 group-hover:text-black/60">
                                                    #{topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-between items-center border-t border-grid-line group-hover:border-black pt-4">
                                        <span className="font-mono text-xs uppercase">View Repository</span>
                                        <span className="text-sm transform group-hover:rotate-45 transition-transform">↗</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
