import { getPinnedRepositories } from "@/lib/github";
import { ProjectsClient } from "@/components/projects-client";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectsPage() {
    const repos = await getPinnedRepositories();

    return <ProjectsClient repos={repos} />;
}
