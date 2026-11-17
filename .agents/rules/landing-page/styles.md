# Styles & Theme

- Warna tidak ditulis hex inline di komponen. Tambah token di `@theme` (`app/app.css`) lalu pakai `bg-<token>` / `text-<token>`.
- Palet "Soft Elegan": `cream`, `blush`, `sand`, `brand-*` (dusty rose, utama `brand-500`), `gray-*` (abu hangat). Nama token sama dengan otwviral.com supaya komponen shadcn yang disalin ikut warna klinik.
- Font: `font-heading` = Cormorant Garamond (judul), `font-sans` = DM Sans (body).
- Tombol CTA: `Button` shadcn + `rounded-full`.
- Animasi masuk pakai `<Reveal>` (`components/reveal.tsx`). Selalu hormati `useReducedMotion()`.
- Foto yang belum ada pakai `<ImageSlot alt="…">` (placeholder berlabel), ganti `src` saat foto asli tersedia.
- Layout harus rapi di lebar HP: pakai `flex-wrap` + `flex-[1_1_<px>]` atau grid `auto-fit`.
