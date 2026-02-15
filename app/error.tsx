"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <div className="p-6 border border-red-900/50 bg-red-900/10 rounded-none max-w-md w-full">
                <h2 className="text-lg font-medium text-red-500 mb-2">System Error</h2>
                <p className="text-sm text-muted-foreground font-mono mb-4 break-words">
                    {error.message || "An unexpected error occurred in the quantitative infrastructure."}
                </p>
                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-red-900/20 hover:bg-red-900/30 text-red-400 text-sm border border-red-900/50 transition-colors"
                >
                    Reset System
                </button>
            </div>
        </div>
    );
}
