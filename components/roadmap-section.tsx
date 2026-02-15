export function RoadmapSection() {
    const phases = [
        {
            title: "Phase 1: Foundations",
            items: ["Calculus & Linear Algebra", "Probability Theory", "Statistics & Inference", "Python & C++ Ecosystem"],
        },
        {
            title: "Phase 2: Quantitative Mechanics",
            items: ["Time Series Analysis", "Stochastic Processes", "Market Microstructure", "Data Engineering Pipelines"],
        },
        {
            title: "Phase 3: Alpha & Modeling",
            items: ["Machine Learning for Alpha", "Volatility Surface Modeling", "Options Pricing (Black-Scholes/Heston)", "Portfolio Optimization"],
        },
        {
            title: "Phase 4: Institutional Risk",
            items: ["Production Execution Systems", "Risk Infrastructure", "Transaction Cost Analysis", "Capital Deployment Discipline"],
        },
    ];

    return (
        <section className="py-20 border-t border-border">
            <div className="container max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold tracking-tight mb-12">Quant Roadmap</h2>

                <div className="space-y-8">
                    {phases.map((phase, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="md:col-span-1">
                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest border-l-2 border-accent pl-3">
                                    Step {index + 1}
                                </span>
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="font-medium text-foreground mb-3">{phase.title}</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-accent/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
