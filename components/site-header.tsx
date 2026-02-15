import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-medium tracking-tight hover:text-accent transition-colors">
                    Neev Kumar Tajpara
                </Link>
                <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                    <Link href="/research" className="hover:text-foreground transition-colors">
                        Research
                    </Link>
                    <Link href="/projects" className="hover:text-foreground transition-colors">
                        Projects
                    </Link>
                    <Link href="https://github.com/neevtajpara" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" />
                    </Link>
                    <Link href="https://linkedin.com/in/neevtajpara" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
