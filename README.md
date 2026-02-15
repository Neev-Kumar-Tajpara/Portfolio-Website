# Systematic Quant Portfolio

Institutional-grade portfolio infrastructure for Neev Kumar Tajpara. Built with Next.js 14, TailwindCSS v4, and GitHub API.

## 🚀 Getting Started

### 1. Environment Setup

Create a file named `.env.local` in the root directory (do not commit this file).

```env
GITHUB_TOKEN=your_github_personal_access_token
NEXT_PUBLIC_GITHUB_USERNAME=neevtajpara
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

*   **GITHUB_TOKEN**: Generate a [Personal Access Token (Classic)](https://github.com/settings/tokens).
    *   *Scopes*: `repo` (if fetching private repos) or public access.
*   **NEXT_PUBLIC_GITHUB_USERNAME**: Your GitHub username.

### 2. GitHub Sync Configuration

The "Projects" section automatically fetches repositories from your GitHub profile based on **Topics**.

To make a repository appear on your site:
1.  Go to the repository on GitHub.
2.  Click the "About" gear icon (top right).
3.  Add one of the following topics:
    *   `quant`
    *   `finance`
    *   `systematic`
    *   `risk`
    *   `trading`
    *   `ml`
    *   `research`

The site revalidates this data every 120 seconds.

### 3. Adding Research

Add new research papers as Markdown (`.md` or `.mdx`) files in the `/research` directory.

**Frontmatter Format:**

```yaml
---
title: "Alpha Decay in HFT"
abstract: "An analysis of signal decay rates..."
date: "2024-03-15"
tags: ["market-microstructure", "alpha", "hft"]
status: "working" # or "published", "in-progress"
---
```

## 🛠️ Deployment

1.  Push this codebase to a new GitHub repository.
2.  Connect the repository to [Vercel](https://vercel.com).
3.  In Vercel Project Settings > Environment Variables, add:
    *   `GITHUB_TOKEN`
    *   `NEXT_PUBLIC_GITHUB_USERNAME`
