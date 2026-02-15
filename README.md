# Systematic Quant Portfolio (Lenis Edition)

Institutional-grade portfolio infrastructure for Neev Kumar Tajpara.
**"Engineering First" Aesthetic**: Built with Next.js 14, TailwindCSS v4, Framer Motion, and GitHub API.

## 🚀 Getting Started

### 1. Environment Setup

Create a file named `.env.local` in the root directory (do not commit this file).

```env
GITHUB_TOKEN=
NEXT_PUBLIC_GITHUB_USERNAME=
NEXT_PUBLIC_APP_URL=
```

### 2. GitHub Sync Configuration

The "Projects" section automatically fetches repositories from your GitHub profile based on **Topics**.

To make a repository appear on your site:
1.  **Tag Your Projects**: Add topics like `quant`, `math`, `hft`, `algo`, `systematic`, `finance`, or `research`.
2.  **Special Handling**: The repo `Black-Scholes-Merton-Model` is explicitly prioritized if it exists and is public.

The site revalidates this data every 60 seconds.

### 3. Adding Research

Add new research papers as Markdown (`.md` or `.mdx`) files in the `/research` directory.

**Frontmatter Format:**

```yaml
---
title: "Alpha Decay in HFT"
abstract: "An analysis of signal decay rates..."
date: "2024-10-15"
tags: ["market-microstructure", "alpha", "hft"]
status: "working"
---
```

## 🛠️ Deployment

1.  Connect this repository to [Vercel](https://vercel.com).
2.  In Vercel Project Settings > Environment Variables, add:
    *   `GITHUB_TOKEN`
    *   `NEXT_PUBLIC_GITHUB_USERNAME`
