## Overview

Landing page + booking klinik kecantikan. Satu app React Router 8 (framework mode, penerus Remix), stack sama dengan otwviral.com. Rules agent ada di `.agents/rules/`.
**Baca index dan rules yang relevan sebelum mulai task.**

## Directory Structure

```
.agents/
├── index.md                  # Index rules — BACA DULU
└── rules/landing-page/       # Rules untuk app ini
CONTEXT.md                    # Glosarium domain klinik
```

## Instructions

### Di awal setiap sesi

1. Baca `.agents/index.md`.
2. Baca `CONTEXT.md` untuk istilah domain.
3. Baca semua rule di `.agents/rules/landing-page/` yang relevan dengan task.

### Selama task

- Ikuti semua rule yang berlaku. Kalau bentrok, pakai rule yang lebih spesifik.
- Kalau tidak ada rule yang cocok, pilih opsi paling konservatif, sebutkan, lalu lanjut.
- Cukup `pnpm typecheck`, `pnpm check`, dan `pnpm test`. Jangan jalankan dev server atau browser kecuali diminta.

### Git

- Satu task satu branch dari `main` (`feat/…`, `fix/…`, `chore/…`). Commit ke `main` diblokir lefthook.
- Kerjakan task paralel di worktree `.worktrees/<task>`.
- Commit hanya kalau user bilang "commit". Pesan commit bahasa Inggris, tanpa label/trailer AI. Body: deskripsi singkat + checklist QA.
- AI tidak pernah push. Setelah commit, kasih perintah push yang siap di-copy.
- Stage file per path.
