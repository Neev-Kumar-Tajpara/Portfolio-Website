import { getResearchRepositories } from "@/lib/github";
import { ResearchClient } from "@/components/research-client";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ResearchPage() {
    const repos = await getResearchRepositories();

    return <ResearchClient repos={repos} />;
}
