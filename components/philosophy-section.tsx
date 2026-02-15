export function PhilosophySection() {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold tracking-tight mb-12 border-b border-white/10 pb-6">System Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <h3 className="font-medium text-white text-lg">Process Over Prediction</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Markets are stochastic. Prediction is fragile. I focus on building robust processes that can adapt to changing regimes.
                    </p>
                </div>

                <div className="space-y-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <h3 className="font-medium text-white text-lg">Risk Discipline</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Survival is the prerequisite for compounding. My systems prioritize capital preservation and drawdown control.
                    </p>
                </div>

                <div className="space-y-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <h3 className="font-medium text-white text-lg">Mathematical Clarity</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Ambiguity is a risk. I strive for precise definitions, rigorous backtesting, and clear statistical evidence.
                    </p>
                </div>

                <div className="space-y-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <h3 className="font-medium text-white text-lg">Systems Thinking</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        A strategy is not just a signal. It is a system of data ingestion, signal generation, execution, and feedback.
                    </p>
                </div>
            </div>
        </div>
    );
}
