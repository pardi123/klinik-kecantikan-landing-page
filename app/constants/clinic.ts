// Semua isi klinik di satu tempat. Ganti nilai dalam [kurung siku] dengan
// data asli; komponen halaman membaca dari sini.

export const clinic = {
  name: '[Nama Klinik]',
  tagline: 'Klinik Kecantikan & Estetika',
  address: '[Alamat klinik]',
  hours: '[Senin–Sabtu, 10.00–20.00]',
  // Format internasional tanpa "+" atau spasi, contoh: 6281234567890
  whatsappNumber: '[6281234567890]',
  instagram: 'https://instagram.com/[namaklinik]',
  tiktok: 'https://tiktok.com/@[namaklinik]',
  timeZone: 'Asia/Jakarta',
}

export const navLinks = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#dokter', label: 'Dokter' },
  { href: '#hasil', label: 'Hasil' },
  { href: '#booking', label: 'Kontak' },
]

export const highlights = [
  { title: 'Ditangani dokter', body: 'Setiap tindakan oleh dokter estetika bersertifikat.' },
  { title: 'Produk terdaftar BPOM', body: 'Skincare dan bahan treatment yang aman.' },
  { title: 'Analisa kulit', body: 'Rencana perawatan sesuai jenis kulitmu.' },
  { title: 'Ruang privat', body: 'Nyaman, bersih, dan tenang.' },
]

export type Service = {
  id: string
  name: string
  description: string
  price: string
  image?: string
}

export const services: Service[] = [
  {
    id: 'facial-glow',
    name: 'Facial Glow',
    description: 'Membersihkan, mengeksfoliasi, dan menghidrasi untuk kulit cerah.',
    price: '[HARGA]',
  },
  {
    id: 'acne',
    name: 'Acne Treatment',
    description: 'Perawatan jerawat aktif dan bekasnya, dipantau dokter.',
    price: '[HARGA]',
  },
  {
    id: 'peeling',
    name: 'Chemical Peeling',
    description: 'Meratakan tekstur dan warna kulit secara bertahap.',
    price: '[HARGA]',
  },
  {
    id: 'laser',
    name: 'Laser Rejuvenation',
    description: 'Menyamarkan flek, pori besar, dan tanda penuaan.',
    price: '[HARGA]',
  },
  {
    id: 'skin-booster',
    name: 'Skin Booster',
    description: 'Hidrasi dari dalam untuk kulit kenyal dan lembap.',
    price: '[HARGA]',
  },
  {
    id: 'botox-filler',
    name: 'Botox & Filler',
    description: 'Kontur wajah natural, dikerjakan langsung oleh dokter.',
    price: '[HARGA]',
  },
]

/** Pilihan di form booking: konsultasi dulu, lalu semua treatment. */
export const bookingOptions = [
  { id: 'konsultasi', name: 'Konsultasi dulu' },
  ...services.map(({ id, name }) => ({ id, name })),
]

export const DEFAULT_BOOKING_OPTION = bookingOptions[0].id

export const bookingOptionNames = new Map(bookingOptions.map(({ id, name }) => [id, name]))

export const doctor: { name: string; bio: string; image?: string } = {
  name: '[Nama Dokter], [Gelar]',
  bio: '[Ringkasan pengalaman, sertifikasi, dan spesialisasi dokter. Tulis dengan nada hangat dan meyakinkan.]',
}

export const testimonials = [
  {
    id: 'testimoni-1',
    quote: '[Kutipan testimoni asli dari pasien.]',
    author: '[Nama pasien]',
    treatment: '[Treatment]',
  },
  {
    id: 'testimoni-2',
    quote: '[Kutipan testimoni asli dari pasien.]',
    author: '[Nama pasien]',
    treatment: '[Treatment]',
  },
]

export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`
}
