import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { ResearchPaper } from "@/lib/schemas";

export function RecentResearch({ papers }: { papers: ResearchPaper[] }) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                <h2 className="text-3xl font-bold tracking-tight">Recent Research</h2>
                <Link href="/research" className="text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">
                    View Archive →
                </Link>
            </div>

            <div className="space-y-12">
                {papers.length === 0 ? (
                    <p className="text-muted-foreground text-sm italic">Research papers pending publication.</p>
                ) : (
                    papers.map((paper) => (
                        <Link key={paper.slug} href={`/research/${paper.slug}`} className="block group">
                            <article className="space-y-3">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                                    <span>{formatDate(paper.date)}</span>
                                    <span className="uppercase tracking-wider px-2 py-0.5 border border-white/10 rounded-none bg-white/5">
                                        {paper.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-medium group-hover:text-blue-400 transition-colors">
                                    {paper.title}
                                </h3>
                                <p className="text-muted-foreground text-base line-clamp-2 max-w-3xl leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {paper.abstract}
                                </p>
                            </article>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
