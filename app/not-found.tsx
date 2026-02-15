import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <h1 className="text-4xl font-bold tracking-tighter">404</h1>
            <p className="text-muted-foreground border-l-2 border-accent pl-4">
                Resource not found in the index.
            </p>
            <Link
                href="/"
                className="mt-8 text-sm hover:text-accent transition-colors underline underline-offset-4"
            >
                Return to Root
            </Link>
        </div>
    );
}
