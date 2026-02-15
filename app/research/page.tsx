'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock Data for Research Papers
const RESEARCH_PAPERS = [
    {
        id: "01",
        date: "2024-10-14",
        title: "Alpha Decay in HFT",
        desc: "Analyzing the half-life of order book imbalance signals across major equity exchanges. We demonstrate that signal efficacy has decreased by 40% over the last 24 months due to overcrowding.",
        tags: ["Microstructure", "Liquidity"]
    },
    {
        id: "02",
        date: "2024-10-02",
        title: "Transformer Models for Time-Series",
        desc: "Adapting attention mechanisms from NLP to multi-variate financial time series. A comparison against LSTM networks reveals superior performance in regime-change detection.",
        tags: ["ML", "Deep Learning"]
    },
    {
        id: "03",
        date: "2024-09-28",
        title: "Mean Reversion Post-Mortem",
        desc: "A critical review of pairs trading strategies during the 2023 banking crisis. Why did statistical arbitrage break down, and how can we adjust Ornstein-Uhlenbeck parameters?",
        tags: ["Equities", "Risk"]
    },
    {
        id: "04",
        date: "2024-09-15",
        title: "Alternative Data: Satellite Imagery",
        desc: "Leveraging retail parking lot occupancy data derived from SAR satellite imagery to predict quarterly earnings for big-box retailers before consensus estimates.",
        tags: ["Alt Data", "Fundamental"]
    },
    {
        id: "05",
        date: "2024-09-01",
        title: "Execution Algorithms in FX",
        desc: "Comparative study of VWAP vs TWAP execution in fragmented FX markets. We introduce a reinforcement learning agent that optimizes order slicing to minimize slippage.",
        tags: ["Execution", "Forex"]
    },
    {
        id: "06",
        date: "2024-08-22",
        title: "Quantum Computing in Portfolio Opt",
        desc: "Exploring the theoretical advantages of Quantum Annealing for solving NP-hard portfolio optimization problems. Is the current hardware ready for production deployment?",
        tags: ["Research", "Quantum"]
    }
];

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white pt-20">

            {/* Background Abstract Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Hero Section */}
            <section className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto mb-20">
                <div className="flex flex-col items-start space-y-6 pt-12 border-b border-grid-line pb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 bg-grid-line/30 border border-grid-line rounded-full text-[10px] font-mono text-primary uppercase tracking-widest"
                    >
                        Systematic Alpha Generation
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter leading-[0.9] max-w-4xl"
                    >
                        Quantitative<br />Research Notes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-muted-foreground text-sm md:text-base mt-4 max-w-2xl border-l-2 border-primary pl-4 py-1"
                    >
                        Alpha Signals, Market Microstructure, & Machine Learning. <br />
                        Deconstructing market inefficiencies through rigorous statistical analysis.
                    </motion.p>
                </div>
            </section>

            {/* Featured Analysis (Academic Paper Preview) */}
            <section className="border-y border-grid-line bg-grid-line/5 mb-24 relative z-10">
                <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12">
                    {/* Metadata Sidemenu */}
                    <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-grid-line flex flex-col justify-between h-full bg-background/50 backdrop-blur-sm">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-mono text-primary uppercase tracking-wider">Featured Analysis</span>
                            </div>
                            <h2 className="text-3xl font-sans font-bold leading-tight mb-4 uppercase">Stochastic Volatility Models in Crypto Markets</h2>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-mono">
                                An examination of Heston-style volatility dynamics within high-frequency cryptocurrency order books. We propose a modified jump-diffusion process to account for flash crashes.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 rounded-full border border-grid-line text-[10px] font-mono uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default">Stochastic Calculus</span>
                            <span className="px-3 py-1 rounded-full border border-grid-line text-[10px] font-mono uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default">Crypto</span>
                        </div>
                    </div>

                    {/* Paper Preview */}
                    <div className="lg:col-span-8 p-8 lg:p-12 bg-background relative overflow-hidden group cursor-pointer hover:bg-grid-line/5 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <i className="font-mono text-xs text-muted-foreground">FIG 1.1</i>
                        </div>

                        <div className="font-serif text-gray-300 space-y-6 max-w-3xl pointer-events-none select-none opacity-80 group-hover:opacity-100 transition-opacity">
                            <p className="text-sm md:text-base leading-loose">
                                We define the price process <span className="italic">S(t)</span> following a stochastic differential equation (SDE) under the risk-neutral measure <span className="italic">Q</span>:
                            </p>
                            <div className="my-8 p-6 border border-grid-line bg-grid-line/10 rounded overflow-x-auto font-mono text-sm text-primary/80">
                                <div className="mb-2">dS(t) = μS(t)dt + √v(t)S(t)dW_S(t)</div>
                                <div>dv(t) = κ(θ - v(t))dt + ξ√v(t)dW_v(t)</div>
                            </div>
                            <p className="text-sm md:text-base leading-loose">
                                Where <span className="italic">dW_S(t)</span> and <span className="italic">dW_v(t)</span> are Wiener processes with correlation <span className="italic">ρ</span>.
                            </p>
                        </div>

                        <div className="mt-8">
                            <span className="inline-flex items-center text-primary font-mono text-sm uppercase tracking-wide group-hover:underline underline-offset-4">
                                Read Full Paper
                                <span className="ml-2">↗</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Grid */}
            <section className="px-6 md:px-12 max-w-[1920px] mx-auto pb-24 relative z-10">
                <div className="flex items-end justify-between mb-10 pb-4 border-b border-grid-line">
                    <h3 className="text-xl font-mono uppercase tracking-wide text-white">Latest Research</h3>
                    <div className="flex items-center space-x-4 text-xs font-mono text-muted-foreground">
                        <span>Sort by:</span>
                        <span className="text-primary cursor-pointer">Date (Newest)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-grid-line border border-grid-line">
                    {RESEARCH_PAPERS.map((paper, idx) => (
                        <article key={idx} className="group relative bg-background h-full hover:bg-white hover:text-black transition-colors duration-300 p-8 flex flex-col justify-between gap-8 cursor-pointer">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs text-muted-foreground group-hover:text-black/60">{paper.date}</span>
                                    <span className="text-grid-line group-hover:text-primary transition-colors">↗</span>
                                </div>
                                <h3 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-black transition-colors uppercase leading-tight">{paper.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-mono group-hover:text-black/70">
                                    {paper.desc}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {paper.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="px-2 py-0.5 rounded-full border border-grid-line text-[10px] font-mono text-muted-foreground group-hover:border-black/20 group-hover:text-black/60 transition-colors uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center space-x-2">
                    {[1, 2, 3].map((num) => (
                        <button key={num} className="w-10 h-10 flex items-center justify-center border border-grid-line bg-background text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-sm">
                            {num}
                        </button>
                    ))}
                    <span className="w-10 h-10 flex items-center justify-center text-muted-foreground font-mono text-sm">...</span>
                    <button className="px-4 h-10 flex items-center justify-center border border-grid-line bg-background text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-sm">
                        Next
                    </button>
                </div>
            </section>

        </div>
    );
}
