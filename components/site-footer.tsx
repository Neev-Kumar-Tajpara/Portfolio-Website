export function SiteFooter() {
    return (
        <footer className="border-t border-border py-12 mt-20">
            <div className="container max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                <div className="flex flex-col gap-2">
                    <span className="font-medium text-foreground">Assuming Risk. Seeking Alpha.</span>
                    <span>© {new Date().getFullYear()} Neev Kumar Tajpara. Systematically generated using StitchMCP.</span>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="mailto:contact@neevtajpara.com" className="hover:text-foreground transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
}
