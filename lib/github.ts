import { Octokit } from "octokit";
import { RepositorySchema, type Repository } from "@/lib/schemas";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

// Cache revalidation time (1 hour default, can be lower for "near real-time")
// The user asked for 120 seconds ISR. We'll use next: { revalidate: 120 } in fetch if possible,
// but octokit uses custom fetch. Better to use standard fetch for simple GETs if we want Next.js caching,
// or use `unstable_cache`. 
// However, Octokit is robust. Let's use Octokit and trust Next.js to not cache it too aggressively unless we wrap it.
// Actually, `octokit.request` uses `fetch` internally in modern versions.
// We can pass `request: { fetch }` to use Next.js patched fetch.

// Helper to get all relevant project repos without slicing
export async function getAllProjectRepositories(): Promise<Repository[]> {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "neevtajpara";

    try {
        const response = await octokit.request("GET /users/{username}/repos", {
            username,
            sort: "pushed",
            direction: "desc",
            per_page: 100,
            headers: { "X-GitHub-Api-Version": "2022-11-28" },
            request: {
                fetch: (url: string, options: any) => {
                    return fetch(url, { ...options, next: { revalidate: 60 } });
                }
            }
        });

        const projectTopics = [
            "quant", "finance", "ml", "trading", "risk", "systematic",
            "math", "algorithm", "hft", "options", "derivatives", "stochastic",
            "rust", "cpp", "python", "go"
        ];

        return response.data
            .filter((repo) => {
                if (repo.fork) return false;
                if (repo.topics?.includes("research-paper")) return false; // Exclude research papers
                if (repo.name === "Black-Scholes-Merton-Model") return true;
                return repo.topics?.some((t) => projectTopics.includes(t));
            })
            .map((repo) => {
                const result = RepositorySchema.safeParse(repo);
                return result.success ? result.data : null;
            })
            .filter((repo): repo is Repository => repo !== null);
    } catch (error) {
        console.error("GitHub API Error:", error);
        return [];
    }
}

export async function getPinnedRepositories(): Promise<Repository[]> {
    const allProjects = await getAllProjectRepositories();
    return allProjects.slice(0, 6);
}

export async function getResearchRepositories(): Promise<Repository[]> {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "neevtajpara";
    try {
        const response = await octokit.request("GET /users/{username}/repos", {
            username,
            sort: "pushed",
            direction: "desc",
            per_page: 100,
            headers: { "X-GitHub-Api-Version": "2022-11-28" },
            request: {
                fetch: (url: string, options: any) => fetch(url, { ...options, next: { revalidate: 60 } })
            }
        });

        return response.data
            .filter((repo) => {
                // Include repos tagged 'research-paper', 'notebook', 'analysis'
                // OR specific research topics
                const researchTopics = ["research-paper", "research", "analysis", "notebook", "model"];
                return repo.topics?.some((t) => researchTopics.includes(t));
            })
            .map((repo) => {
                const result = RepositorySchema.safeParse(repo);
                return result.success ? result.data : null;
            })
            .filter((repo): repo is Repository => repo !== null);
    } catch (error) {
        console.error("GitHub API Error:", error);
        return [];
    }
}
