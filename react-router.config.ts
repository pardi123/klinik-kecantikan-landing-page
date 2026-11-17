import type { Config } from '@react-router/dev/config'

// GITHUB_PAGES=true → build statis (prerender) untuk GitHub Pages.
// Default tetap SSR lewat server.js (Hostinger).
const isStatic = process.env.GITHUB_PAGES === 'true'

export default {
  ssr: !isStatic,
  prerender: isStatic ? ['/'] : undefined,
  basename: process.env.BASE_PATH ?? '/',
} satisfies Config
