import { getResearchPaper, getResearchPapers } from "@/lib/research";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { mdxComponents } from "@/components/mdx-components";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 120;

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const paper = await getResearchPaper(params.slug);
    if (!paper) return {};

    return {
        title: `${paper.title} | Neev Kumar Tajpara`,
        description: paper.abstract,
        openGraph: {
            title: paper.title,
            description: paper.abstract,
            type: "article",
            publishedTime: paper.date,
            authors: ["Neev Kumar Tajpara"],
            tags: paper.tags,
        },
    };
}

export async function generateStaticParams() {
    const papers = await getResearchPapers();
    return papers.map((paper) => ({
        slug: paper.slug,
    }));
}

export default async function ResearchPaperPage({ params }: { params: { slug: string } }) {
    const paper = await getResearchPaper(params.slug);

    if (!paper) {
        notFound();
    }

    // JSON-LD Definition for ScholarlyArticle
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        headline: paper.title,
        author: {
            "@type": "Person",
            name: "Neev Kumar Tajpara"
        },
        datePublished: paper.date,
        description: paper.abstract,
        keywords: paper.tags.join(", ")
    };

    return (
        <div className="container max-w-3xl mx-auto px-6 py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Link href="/research" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Index
            </Link>

            <header className="mb-12 border-b border-border pb-8">
                <div className="flex gap-2 mb-4">
                    {paper.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-muted-foreground border border-border px-1.5 py-0.5 rounded-none uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground leading-title">
                    {paper.title}
                </h1>
                <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                    <time dateTime={paper.date}>{formatDate(paper.date)}</time>
                    <span className="uppercase tracking-widest text-xs">{paper.status}</span>
                </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground italic border-l-4 border-accent pl-4 mb-12">
                    Abstract: {paper.abstract}
                </p>

                <MDXRemote
                    source={paper.content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkMath],
                            rehypePlugins: [rehypeKatex],
                        },
                    }}
                    components={mdxComponents}
                />
            </div>

            <div className="mt-20 pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground font-mono">
                    Citation: Tajpara, N. K. ({new Date(paper.date).getFullYear()}). {paper.title}. neevtajpara.com
                </p>
            </div>
        </div>
    );
}
