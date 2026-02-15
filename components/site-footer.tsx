export function SiteFooter() {
    return (
        <footer className="border-t border-border py-12 mt-20">
            <div className="container max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                <div className="flex flex-col gap-2">
                    <span className="font-medium text-foreground">Process over prediction.</span>
                    <span>© {new Date().getFullYear()} Neev Kumar Tajpara.</span>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/Neev-Kumar-Tajpara" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/neev-kumar-tajpara/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="mailto:neevtajpara@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
}
