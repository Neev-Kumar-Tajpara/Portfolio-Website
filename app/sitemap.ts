import { MetadataRoute } from "next";
import { getResearchPapers } from "@/lib/research";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const papers = await getResearchPapers();
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://neevtajpara.com";

    const researchEntries: MetadataRoute.Sitemap = papers.map((paper) => ({
        url: `${baseUrl}/research/${paper.slug}`,
        lastModified: new Date(paper.date),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/research`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        ...researchEntries,
    ];
}
