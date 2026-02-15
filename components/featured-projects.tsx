import Link from "next/link";
import { Repository } from "@/lib/schemas";
import { Star, GitFork, ExternalLink } from "lucide-react";

export function FeaturedProjects({ repos }: { repos: Repository[] }) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                <h2 className="text-3xl font-bold tracking-tight">Systematic Infrastructure</h2>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">
                    View All →
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {repos.length === 0 ? (
                    <p className="text-muted-foreground text-sm italic col-span-2">Repositories syncing via GitHub API...</p>
                ) : (
                    repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 border border-white/10 hover:border-blue-500/50 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                                    {repo.name}
                                </h3>
                                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 line-clamp-2 h-10 leading-relaxed">
                                {repo.description || "No description provided."}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                                <div className="flex items-center gap-4">
                                    {repo.language && (
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1.5">
                                        <Star className="w-3.5 h-3.5" />
                                        {repo.stargazers_count}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}
