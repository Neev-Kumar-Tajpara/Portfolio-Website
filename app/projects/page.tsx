import { getPinnedRepositories } from "@/lib/github";
import { Star, ExternalLink, GitFork } from "lucide-react";
import { Metadata } from "next";

export const revalidate = 120;

export const metadata: Metadata = {
    title: "Projects | Neev Kumar Tajpara",
    description: "Systematic trading infrastructure, open source libraries, and quantitative research code.",
};

export default async function ProjectsPage() {
    const repos = await getPinnedRepositories();

    return (
        <div className="container max-w-4xl mx-auto px-6 py-20">
            <div className="mb-12 border-b border-border pb-6">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Projects</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Open source quantitative infrastructure, trading systems, and research implementations.
                    Automatically synced from GitHub.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.length === 0 ? (
                    <p className="text-muted-foreground italic col-span-2">
                        No projects found matching quant/finance topics. Check GitHub tagging.
                    </p>
                ) : (
                    repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 border border-border hover:border-accent/50 transition-colors bg-card hover:bg-muted/30 flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="font-medium group-hover:text-accent transition-colors text-lg">
                                    {repo.name}
                                </h3>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>

                            <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1 h-[4.5em]">
                                {repo.description || "No description provided."}
                            </p>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {repo.topics.slice(0, 3).map(topic => (
                                        <span key={topic} className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-border/50 text-muted-foreground">
                                            {topic}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-4">
                                        {repo.language && (
                                            <span className="flex items-center gap-1.5 text-foreground">
                                                <span className="w-2 h-2 rounded-full bg-accent" />
                                                {repo.language}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            {repo.stargazers_count}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}
