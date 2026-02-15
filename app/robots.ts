import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://neevtajpara.com/sitemap.xml", // Ideally dynamic based on env, but hardcoded URL as requested by User Identity/Prompt
    };
}
