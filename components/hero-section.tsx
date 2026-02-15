import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <div className="flex flex-col justify-center max-w-4xl">
            <div className="space-y-8">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground">
                    Neev Kumar Tajpara
                </h1>
                <h2 className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tight">
                    Systematic Quantitative Researcher
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Designing systematic trading systems grounded in{" "}
                    <span className="text-foreground font-medium">probability</span>,{" "}
                    <span className="text-foreground font-medium">risk</span>, and{" "}
                    <span className="text-foreground font-medium">disciplined execution</span>.
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                    <Link
                        href="/research"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm font-medium tracking-wide uppercase"
                    >
                        View Research
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-white/20 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors text-sm font-medium tracking-wide group uppercase"
                    >
                        View Projects
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
