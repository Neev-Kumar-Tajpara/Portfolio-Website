import { getResearchPapers } from "@/lib/research";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const revalidate = 120; // 2 minutes

export const metadata = {
    title: "Research | Neev Kumar Tajpara",
    description: "Index of systematic quantitative research papers and working notes.",
};

export default async function ResearchIndexPage() {
    const papers = await getResearchPapers();

    return (
        <div className="container max-w-4xl mx-auto px-6 py-20">
            <div className="mb-12 border-b border-border pb-6">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Research</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Working papers, notes, and analyzing market microstructure, risk, and alpha.
                </p>
            </div>

            <div className="space-y-12">
                {papers.map((paper) => (
                    <article key={paper.slug} className="group relative flex flex-col items-start">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-3">
                            <time dateTime={paper.date}>{formatDate(paper.date)}</time>
                            <div className="flex gap-2">
                                {paper.tags.map((tag) => (
                                    <span key={tag} className="px-1.5 py-0.5 border border-border rounded-none text-[10px] uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className={`px-1.5 py-0.5 rounded-none text-[10px] uppercase tracking-wider ${paper.status === 'published' ? 'bg-accent text-accent-foreground' :
                                    paper.status === 'working' ? 'bg-yellow-900/20 text-yellow-500' :
                                        'bg-muted text-muted-foreground'
                                }`}>
                                {paper.status}
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                            <Link href={`/research/${paper.slug}`}>
                                <span className="absolute inset-0" />
                                {paper.title}
                            </Link>
                        </h2>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {paper.abstract}
                        </p>

                        <div className="text-sm font-medium text-accent">
                            Read Paper →
                        </div>
                    </article>
                ))}
                {papers.length === 0 && (
                    <p className="text-muted-foreground italic">No research papers found. Add markdown files to /research.</p>
                )}
            </div>
        </div>
    );
}
