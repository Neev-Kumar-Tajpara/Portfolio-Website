import Link from "next/link";
// import { highlight } from "sugar-high"; 
// We will use standard HTML elements styled by Tailwind Typography plugin

export const mdxComponents = {
    h1: (props: any) => <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-foreground" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4 text-foreground" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold tracking-tight mt-6 mb-3 text-foreground" {...props} />,
    p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground" {...props} />,
    ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground" {...props} />,
    li: (props: any) => <li className="" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="mt-6 border-l-2 border-accent pl-6 italic text-muted-foreground" {...props} />
    ),
    a: (props: any) => (
        <a className="font-medium text-accent hover:underline underline-offset-4" {...props} />
    ),
    code: (props: any) => (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props} />
    ),
    // Add Table, etc. if needed
};
