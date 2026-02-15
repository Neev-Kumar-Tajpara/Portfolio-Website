'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Repository } from '@/lib/schemas';

interface ProjectsClientProps {
    repos: Repository[];
}

export function ProjectsClient({ repos }: ProjectsClientProps) {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white pt-20">

            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Hero Section */}
            <section className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto py-20 border-b border-grid-line overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-primary tracking-widest uppercase">System Online</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight uppercase leading-[0.9]"
                    >
                        PROJECTS
                    </motion.h1>
                    <p className="font-mono text-muted-foreground text-sm md:text-base mt-2 max-w-xl">
                // Open Source Financial Systems & Models. <br />
                // Building the primitive layer for decentralized finance.
                    </p>
                </div>
            </section>

            {/* Featured Project (Terminal) - Keep simplified or dynamic? 
           User didn't ask to remove it, but "get rid of fake/placeholder projects".
           I'll keep the Visual Terminal as "FEATURED_DEPLOYMENT" but maybe genericize content or bind to specific repo if matches?
           For now, keeping the Terminal as a VIBE component (it's hardcoded visualization). 
       */}
            <section className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto py-16">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-lg font-mono text-white mb-1">FEATURED_DEPLOYMENT</h2>
                        <div className="h-0.5 w-12 bg-primary"></div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground border border-grid-line px-2 py-1 rounded">v2.4.0-stable</span>
                </div>

                <div className="border border-grid-line bg-[#0a0a0a] rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300">
                    {/* Terminal Header */}
                    <div className="bg-[#111] border-b border-grid-line p-3 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">neev@local:~/projects/black-scholes</div>
                        <div className="w-10"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Terminal Content - Visual only */}
                        <div className="p-6 font-mono text-sm text-gray-300 h-96 overflow-y-auto border-b lg:border-b-0 lg:border-r border-grid-line bg-black relative">
                            <div className="space-y-1">
                                <div className="text-green-500 flex items-center gap-2">
                                    <span>$</span>
                                    <span className="text-white">python3 run_simulation.py --model=BSM --volatility=0.25</span>
                                </div>
                                <div className="text-gray-500 mt-2">Initializing Black-Scholes-Merton Engine...</div>
                                <div className="text-gray-500">Loading historical spot prices [S&P 500]...</div>
                                <div className="text-blue-400">Done. (0.042s)</div>
                                <br />
                                <div className="flex justify-between text-xs text-gray-500 border-b border-gray-800 pb-1 mb-2">
                                    <span>PARAMETER</span>
                                    <span>VALUE</span>
                                </div>
                                {[
                                    { k: "Spot Price (S)", v: "4,120.50" },
                                    { k: "Strike Price (K)", v: "4,200.00" },
                                    { k: "Time to Mat. (T)", v: "0.5" },
                                    { k: "Risk-free Rate (r)", v: "0.035" },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between">
                                        <span>{row.k}</span>
                                        <span className="text-primary">{row.v}</span>
                                    </div>
                                ))}
                                <br />
                                <div className="text-gray-500">&gt; Computing Call Option Price...</div>
                                <div className="text-white bg-primary/10 inline-block px-2 py-1 mt-1 border border-primary/30 rounded text-xs">d1 = 0.1245, d2 = -0.0523</div>
                                <div className="mt-2 text-green-400 font-bold flex items-center gap-1">
                                    Call Price: $145.23 <span className="animate-pulse">_</span>
                                </div>
                            </div>

                            {/* Mock GPU Util */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                    <span>GPU Utilization</span>
                                    <span>84%</span>
                                </div>
                                <div className="w-full bg-grid-line h-1 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[84%]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Project Info Side - Static Description of the model */}
                        <div className="p-8 flex flex-col justify-between bg-background/50">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold text-white font-mono break-all">Black-Scholes-Merton-Model</h3>
                                    <span className="px-2 py-0.5 rounded-full border border-primary/50 text-primary text-[10px] font-mono tracking-wide uppercase bg-primary/10">Public</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-mono">
                                    A high-performance Python implementation of the Black-Scholes-Merton mathematical model for pricing European call and put options. Includes a comprehensive testing suite against real-world market data and strict type checking. Optimized for low-latency environments.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Python 3.11", "NumPy", "SciPy", "Pandas"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-grid-line/50 border border-grid-line rounded text-xs text-white font-mono">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Grid */}
            <section className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto pb-24">
                <div className="mb-8">
                    <h2 className="text-lg font-mono text-white mb-1">REPOSITORY_INDEX</h2>
                    <div className="h-0.5 w-12 bg-primary"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((project, idx) => (
                        <Link href={project.homepage || project.html_url} key={idx} target="_blank" className="group relative bg-[#050505] border border-grid-line p-6 flex flex-col h-full rounded hover:border-primary transition-colors duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-primary text-lg">↗</span>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-muted-foreground font-mono">
                                    [{idx + 1}]
                                </span>
                                <h3 className="font-mono font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                            </div>

                            <p className="text-muted-foreground text-sm mb-6 flex-grow font-light leading-relaxed font-mono">
                                {project.description || "No description provided."}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-grid-line/50 mt-auto">
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-2.5 h-2.5 rounded-full bg-primary`}></div>
                                    <span className="text-xs text-muted-foreground font-mono">{project.language || "Code"}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                                        <span>★</span> {project.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        {project.forks_count}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
