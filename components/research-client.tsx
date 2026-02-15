'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Repository } from '@/lib/schemas';

interface ResearchClientProps {
    repos: Repository[];
}

export function ResearchClient({ repos }: ResearchClientProps) {
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
                        QUANTITATIVE RESEARCH ARCHIVE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter leading-[0.9] max-w-4xl"
                    >
                        RESEARCH<br />PAPERS<span className="text-primary">.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-muted-foreground text-sm md:text-base mt-4 max-w-2xl border-l-2 border-primary pl-4 py-1"
                    >
                        Systematic market research & quantitative investigations. <br />
                        Focused on risk, volatility, and structural market behavior.
                    </motion.p>
                </div>
            </section>

            {/* Research Grid */}
            <section className="px-6 md:px-12 max-w-[1920px] mx-auto pb-24 relative z-10">
                <div className="flex items-end justify-between mb-10 pb-4 border-b border-grid-line">
                    <h3 className="text-xl font-mono uppercase tracking-wide text-white">Latest Research</h3>
                    <div className="flex items-center space-x-4 text-xs font-mono text-muted-foreground">
                        <span>Source:</span>
                        <span className="text-primary cursor-pointer">GitHub (Live)</span>
                    </div>
                </div>

                {repos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-grid-line border border-grid-line">
                        {repos.map((repo, idx) => (
                            <Link href={repo.homepage || repo.html_url} key={idx} target="_blank" className="group relative bg-background h-full hover:bg-white hover:text-black transition-colors duration-300 p-8 flex flex-col justify-between gap-8 cursor-pointer">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-mono text-xs text-muted-foreground group-hover:text-black/60">
                                            {new Date(repo.pushed_at || "").toLocaleDateString()}
                                        </span>
                                        <span className="text-grid-line group-hover:text-primary transition-colors">↗</span>
                                    </div>
                                    <h3 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-black transition-colors uppercase leading-tight">{repo.name}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-mono group-hover:text-black/70">
                                        {repo.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {repo.topics?.slice(0, 3).map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2 py-0.5 rounded-full border border-grid-line text-[10px] font-mono text-muted-foreground group-hover:border-black/20 group-hover:text-black/60 transition-colors uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-grid-line">
                        <p className="font-mono text-muted-foreground">No public repositories tagged 'research' found.</p>
                    </div>
                )}
            </section>

        </div>
    );
}
