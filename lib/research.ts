import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ResearchFrontmatterSchema, type ResearchPaper } from "@/lib/schemas";

const RESEARCH_DIR = path.join(process.cwd(), "research");

export async function getResearchPapers(): Promise<ResearchPaper[]> {
    if (!fs.existsSync(RESEARCH_DIR)) {
        return [];
    }

    const files = fs.readdirSync(RESEARCH_DIR).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

    const papers = await Promise.all(
        files.map(async (file) => {
            const filePath = path.join(RESEARCH_DIR, file);
            const source = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(source);

            const parsedFrontmatter = ResearchFrontmatterSchema.safeParse(data);

            if (!parsedFrontmatter.success) {
                console.error(`Invalid frontmatter in ${file}:`, parsedFrontmatter.error);
                return null;
            }

            return {
                ...parsedFrontmatter.data,
                slug: file.replace(/\.mdx?$/, ""),
                content,
            };
        })
    );

    return papers
        .filter((paper): paper is ResearchPaper => paper !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getResearchPaper(slug: string): Promise<ResearchPaper | null> {
    const filePath = path.join(RESEARCH_DIR, `${slug}.md`);
    const mdxPath = path.join(RESEARCH_DIR, `${slug}.mdx`);

    let source = "";
    if (fs.existsSync(filePath)) {
        source = fs.readFileSync(filePath, "utf-8");
    } else if (fs.existsSync(mdxPath)) {
        source = fs.readFileSync(mdxPath, "utf-8");
    } else {
        return null;
    }

    const { data, content } = matter(source);
    const parsedFrontmatter = ResearchFrontmatterSchema.safeParse(data);

    if (!parsedFrontmatter.success) {
        return null;
    }

    return {
        ...parsedFrontmatter.data,
        slug,
        content,
    };
}
