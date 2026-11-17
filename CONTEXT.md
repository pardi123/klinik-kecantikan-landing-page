# Context — Glosarium

| Istilah             | Arti                                                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Klinik              | Klinik kecantikan & estetika pemilik situs ini. Data tetapnya di `app/constants/clinic.ts`.                                                                                   |
| Treatment / Layanan | Kategori di `app/constants/price-list.ts` (Facial Treatment, Chemical Peeling, …) berisi item + harga resmi. `id` kategori dipakai di form booking dan URL `?treatment=<id>`. |
| Konsultasi          | Pilihan pertama di `bookingOptions` (`id: "konsultasi"`, default form) untuk pasien yang belum tahu treatment apa.                                                            |
| Booking             | Permintaan jadwal dari pasien: nama, nomor WhatsApp, treatment, tanggal, catatan. Divalidasi `bookingSchema`.                                                                 |
| Sistem booking      | Backend klinik (belum ada). Kalau `VITE_BOOKING_API_URL` diisi, booking di-POST ke `/bookings`; kalau kosong, diteruskan ke WhatsApp.                                         |
| Placeholder         | Teks dalam `[kurung siku]` = data asli yang belum diisi klien. Jangan diganti angka/testimoni karangan.                                                                       |
