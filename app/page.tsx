import { getAllProjectRepositories, getResearchRepositories } from "@/lib/github";
import { LandingClient } from "@/components/landing-client";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [projects, research] = await Promise.all([
    getAllProjectRepositories(),
    getResearchRepositories()
  ]);

  return <LandingClient projectsCount={projects.length} researchCount={research.length} />;
}
