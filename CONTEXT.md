# Context — Glosarium

| Istilah             | Arti                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Klinik              | Klinik kecantikan & estetika pemilik situs ini. Data tetapnya di `app/constants/clinic.ts`.                                      |
| Treatment / Layanan | Tindakan yang bisa dibooking (Facial Glow, Acne Treatment, …). Punya `id` slug yang dipakai di form dan URL `?treatment=<id>`.   |
| Konsultasi          | Pilihan default booking (`CONSULTATION_ID = "konsultasi"`) untuk pasien yang belum tahu treatment apa.                           |
| Booking             | Permintaan jadwal dari pasien: nama, nomor WhatsApp, treatment, tanggal, catatan. Divalidasi `bookingSchema`.                    |
| Sistem booking      | Backend klinik (belum ada). Kalau `VITE_BOOKING_API_URL` diisi, booking di-POST ke `/bookings`; kalau kosong, diteruskan ke WhatsApp. |
| Placeholder         | Teks dalam `[kurung siku]` = data asli yang belum diisi klien. Jangan diganti angka/testimoni karangan.                          |
