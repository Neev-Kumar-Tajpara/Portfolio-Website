import { HeroSection } from "@/components/hero-section";
import { RecentResearch } from "@/components/recent-research";
import { FeaturedProjects } from "@/components/featured-projects";
import { PhilosophySection } from "@/components/philosophy-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getResearchPapers } from "@/lib/research";
import { getPinnedRepositories } from "@/lib/github";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neev Kumar Tajpara | Systematic Quant",
  description: "Systematic Quantitative Researcher designing systems grounded in probability, risk, and disciplined execution.",
  openGraph: {
    title: "Neev Kumar Tajpara | Systematic Quant",
    description: "Systematic Quantitative Researcher designing systems grounded in probability, risk, and disciplined execution.",
    type: "profile",
    locale: "en_US",
  },
};

export const revalidate = 120; // 120 seconds ISR as requested

export default async function Home() {
  const allPapers = await getResearchPapers();
  const repos = await getPinnedRepositories();

  // JSON-LD Definition
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neev Kumar Tajpara",
    jobTitle: "Systematic Quantitative Researcher",
    url: "https://neevtajpara.com",
    sameAs: [
      "https://github.com/neevtajpara",
      "https://linkedin.com/in/neevtajpara"
    ],
    description: "Designing systematic trading systems grounded in probability, risk, and disciplined execution."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
        {/* Section 1: Hero */}
        <SectionWrapper id="hero">
          <HeroSection />
        </SectionWrapper>

        {/* Section 2: Research */}
        <SectionWrapper id="research">
          <RecentResearch papers={allPapers.slice(0, 3)} />
        </SectionWrapper>

        {/* Section 3: Projects */}
        <SectionWrapper id="projects">
          <FeaturedProjects repos={repos} />
        </SectionWrapper>

        {/* Section 4: Philosophy */}
        <SectionWrapper id="philosophy">
          <PhilosophySection />
        </SectionWrapper>

        {/* Section 5: Roadmap */}
        <SectionWrapper id="roadmap">
          <RoadmapSection />
        </SectionWrapper>
      </div>
    </>
  );
}
