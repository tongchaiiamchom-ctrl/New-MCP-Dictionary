# New-MCP-Dictionary

Bilingual (EN/TH) MCP manufacturing dictionary with **Supabase realtime sync**.

## Deploy

1. Put full app in `index.html` (see project source).
2. Host on **Cloudflare Pages** (connect this repo).
3. Lock access with Cloudflare WAF to IP `61.90.156.195` only.

## Stack

- Static HTML/CSS/JS
- Supabase (Postgres + Realtime)
- Cloudflare Pages + WAF (IP allowlist)

## Live

After Cloudflare deploy: `https://<project>.pages.dev`
