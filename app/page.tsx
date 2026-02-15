'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Home() {
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
                  <span className="block text-black/60 mb-1">AUM</span>
                  <span className="text-2xl">$4.2B+</span>
                </div>
                <div>
                  <span className="block text-black/60 mb-1">Daily Volume</span>
                  <span className="text-2xl">$12B</span>
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
            {[
              { id: "01", year: "2023", title: "Market Microstructure", desc: "Analyzing order book imbalances and their predictive power on short-term price movements." },
              { id: "02", year: "2024", title: "Statistical Arbitrage", desc: "Mean reversion strategies in high-volatility regimes: A study on covariance matrix stability." },
              { id: "03", year: "2024", title: "Latency Optimization", desc: "FPGA-based execution systems reducing tick-to-trade latency to sub-microsecond levels." }
            ].map((item, idx) => (
              <Link href="/research" key={idx} className="bg-background p-8 md:p-10 group hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-primary group-hover:text-black mb-4 uppercase flex justify-between">
                    <span>Paper_{item.id}</span>
                    <span>{item.year}</span>
                  </div>
                  <h4 className="text-3xl font-sans font-bold uppercase leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {item.title.split(' ').map((word, i) => <span key={i}>{word}<br /></span>)}
                  </h4>
                  <p className="font-mono text-xs text-gray-500 group-hover:text-black/70 mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-12 flex justify-between items-center border-t border-grid-line group-hover:border-black pt-4">
                  <span className="font-mono text-xs uppercase">Read PDF</span>
                  <span className="text-sm transform group-hover:rotate-45 transition-transform">↗</span>
                </div>
              </Link>
            ))}

            {/* Visual Card */}
            <div className="bg-background p-0 md:col-span-2 relative overflow-hidden group min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                <h4 className="text-2xl font-sans font-bold uppercase text-white">Visualizing Dark Pools</h4>
              </div>
              {/* Placeholder for complex visual - using CSS pattern for now */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black" />
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
              </div>
            </div>

            <Link href="/research" className="bg-background p-8 md:p-10 group hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-primary group-hover:text-black mb-4 uppercase flex justify-between">
                  <span>Paper_04</span>
                  <span>In Review</span>
                </div>
                <h4 className="text-3xl font-sans font-bold uppercase leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  Stochastic<br />Volatility
                </h4>
                <p className="font-mono text-xs text-gray-500 group-hover:text-black/70 mt-4 leading-relaxed">
                  Implied volatility surfaces and their decay rates post-earnings announcements.
                </p>
              </div>
              <div className="mt-12 flex justify-between items-center border-t border-grid-line group-hover:border-black pt-4">
                <span className="font-mono text-xs uppercase">Read PDF</span>
                <span className="text-sm transform group-hover:rotate-45 transition-transform">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: INFRASTRUCTURE MAP */}
      <section className="bg-background py-24 border-b border-grid-line">
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative border border-grid-line p-1 h-[400px] bg-black overflow-hidden relative">
              {/* Abstract Map Representation */}
              <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

              {/* Pinging Nodes */}
              <div className="absolute top-[30%] left-[25%]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <div className="absolute top-[25%] left-[48%]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping delay-700"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <div className="absolute top-[35%] left-[80%]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping delay-1000"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>

              <div className="absolute bottom-4 left-4 font-mono text-xs text-primary bg-black/80 px-2 py-1 border border-grid-line">
                Latency Map // Live
              </div>
            </div>

            <div className="order-1 lg:order-2 font-mono">
              <h3 className="text-2xl text-white uppercase mb-8 pb-4 border-b border-grid-line flex justify-between items-center">
                Infrastructure <span className="text-data-blue text-sm">[ Co-Location ]</span>
              </h3>
              <div className="space-y-6">
                {[
                  { loc: "NY4 (New York)", lat: "< 12μs", width: "95%" },
                  { loc: "LD4 (London)", lat: "< 18μs", width: "85%" },
                  { loc: "TY3 (Tokyo)", lat: "< 24μs", width: "70%" },
                ].map((loc, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="flex justify-between text-sm text-gray-400 mb-1 group-hover:text-primary transition-colors">
                      <span>{loc.loc}</span>
                      <span>{loc.lat}</span>
                    </div>
                    <div className="w-full h-1 bg-grid-line">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: loc.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * idx }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-4 border border-dashed border-grid-line bg-background text-xs text-gray-500">
                <span className="text-primary block mb-2">&gt; SYSTEM_MSG:</span>
                Redundancy protocols engaged. Microwave links active for critical paths. Direct market access established.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
