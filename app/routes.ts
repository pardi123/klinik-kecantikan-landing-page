import { index, layout, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('./layouts/site-layout.tsx', [index('./routes/landing/page.tsx')]),
] satisfies RouteConfig
