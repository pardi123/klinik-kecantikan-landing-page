# Forms & Booking

- Setiap form punya schema zod di `app/schemas/<domain>.ts`; validasi di `action()` server pakai `safeParse`, error dikembalikan sebagai `fieldErrors`.
- Submit lewat `useFetcher()` supaya halaman tidak reload; feedback pakai `toast` (sonner).
- Field pakai komponen `components/ui` (`Input`, `Label`, `NativeSelect`, `Textarea`) + `aria-invalid` saat error.
- Panggilan ke backend hanya di `services/*.server.ts`. Error API dibungkus class error sendiri lalu ditampilkan sebagai pesan.
- Booking: `createBooking()` POST ke `${BOOKING_API_URL}/bookings` kalau env diisi; selalu kembalikan `whatsappUrl` untuk konfirmasi pasien via WhatsApp.
- Setiap ubah schema booking, cek juga body yang dikirim ke backend dan pesan WhatsApp-nya.
