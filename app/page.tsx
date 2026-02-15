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
        {/* Section 1: Hero - Pure Black */}
        <SectionWrapper id="hero" bgColor="bg-black">
          <HeroSection />
        </SectionWrapper>

        {/* Section 2: Research - Deep Navy/Slate */}
        <SectionWrapper id="research" bgColor="bg-slate-950">
          <RecentResearch papers={allPapers.slice(0, 3)} />
        </SectionWrapper>

        {/* Section 3: Projects - Dark Slate/zinc */}
        <SectionWrapper id="projects" bgColor="bg-zinc-950">
          <FeaturedProjects repos={repos} />
        </SectionWrapper>

        {/* Section 4: Philosophy - Black/Void */}
        <SectionWrapper id="philosophy" bgColor="bg-[#050505]">
          <PhilosophySection />
        </SectionWrapper>

        {/* Section 5: Roadmap - Deep Neutral */}
        <SectionWrapper id="roadmap" bgColor="bg-neutral-950">
          <RoadmapSection />
        </SectionWrapper>
      </div>
    </>
  );
}
