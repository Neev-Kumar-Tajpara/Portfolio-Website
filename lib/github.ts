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

export async function getPinnedRepositories(): Promise<Repository[]> {
    // Option A: Fetch pinned via GraphQL (best for pinned)
    // Option B: Fetch all and filter (simpler REST).
    // The user requirement says "Pinned repositories OR Repositories tagged with...".
    // Let's implement robust search for tagged repos as primary, since Pinned requires GraphQL complexity or specific endpoint.
    // We'll search for user's repos with specific topics.

    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "neevtajpara";

    try {
        // Search for repos with topics: quant, finance, trading, research, risk
        // We fetch user's repos sorted by updated.
        const response = await octokit.request("GET /users/{username}/repos", {
            username,
            sort: "updated",
            direction: "desc",
            per_page: 100,
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
            // Next.js caching hook
            request: {
                fetch: (url: string, options: any) => {
                    return fetch(url, { ...options, next: { revalidate: 120 } });
                }
            }
        });

        const relevantTopics = ["quant", "finance", "ml", "trading", "research", "risk", "systematic"];

        const validatedRepos = response.data
            .filter((repo) => {
                // Filter by topic intersection
                const hasTopic = repo.topics?.some((t) => relevantTopics.includes(t));
                // Also include if description mentions keywords? No, stick to explicit tags/structure for "System" discipline.
                return hasTopic || repo.topics?.length ? true : false; // If explicit topics are present, maybe include?
                // User said: "Pinned OR repositories tagged with..."
                // Let's strict filter for now.
                // Actually, let's just return all non-forks, sorted by date, that have *any* topics, 
                // prioritizing the "quant" ones in UI. 
                // Or strictly follow the tag rule.
                return hasTopic;
            })
            .map((repo) => {
                // Zod validation
                const result = RepositorySchema.safeParse(repo);
                if (!result.success) {
                    console.error(`Validation failed for repo ${repo.name}:`, result.error);
                    return null;
                }
                return result.data;
            })
            .filter((repo): repo is Repository => repo !== null);

        return validatedRepos.slice(0, 6); // Top 6
    } catch (error) {
        console.error("GitHub API Error:", error);
        return []; // Return empty array to not crash UI
    }
}
