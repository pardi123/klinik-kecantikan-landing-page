# Commands

| Command          | Keterangan                                                        |
| ---------------- | ----------------------------------------------------------------- |
| `pnpm install`   | Install deps (otomatis build lewat `postinstall`, buat Hostinger) |
| `pnpm dev`       | Dev server (hanya kalau diminta)                                  |
| `pnpm build`     | Build production ke `build/`                                      |
| `pnpm start`     | Jalankan `server.js` (Express + SSR)                              |
| `pnpm typecheck` | `react-router typegen && tsc`                                     |
| `pnpm check`     | biome check + write                                               |
| `pnpm lint`      | biome lint + write                                                |
| `pnpm test`      | vitest                                                            |

Pakai pnpm, bukan npm/yarn.
