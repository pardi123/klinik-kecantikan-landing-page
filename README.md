# Landing Page Klinik Kecantikan

React Router 8 (SSR) + Tailwind v4 + shadcn/ui + framer-motion, stack sama dengan otwviral.com.
Aturan kerja untuk agent ada di `AGENTS.md`.

```bash
pnpm install       # sekalian build (postinstall, buat Hostinger)
pnpm dev           # http://localhost:5173
pnpm typecheck && pnpm check && pnpm test
pnpm start         # production: node server.js
```

- Data klinik (nama, WA, treatment, harga, dokter, testimoni): `app/constants/clinic.ts`
- Booking: `app/routes/landing/page.tsx` (action) → `app/services/booking.server.ts`.
  Isi `BOOKING_API_URL` di `.env` saat backend booking siap; sebelum itu booking diteruskan ke WhatsApp.
- Deploy Hostinger: entry file `server.js`, sama seperti otwviral.com.
