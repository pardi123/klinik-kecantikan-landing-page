// Semua isi klinik di satu tempat. Ganti nilai dalam [kurung siku] dengan
// data asli; komponen halaman membaca dari sini.

export const clinic = {
  name: 'Zeeta Beauty Care',
  tagline: 'Klinik Pratama · Beauty Care Jambi',
  since: 2020,
  address:
    'Jalan Gajah Mada, RT.13, Kelurahan Rengas Condong, Kecamatan Muara Bulian, Kabupaten Batang Hari, Jambi',
  hours: '[Senin–Sabtu, 10.00–20.00]',
  // Format internasional tanpa "+" atau spasi, contoh: 6281234567890
  whatsappNumber: '6281272526266',
  instagram: 'https://instagram.com/[namaklinik]',
  tiktok: 'https://tiktok.com/@[namaklinik]',
  timeZone: 'Asia/Jakarta',
}

/** Path file di `public/images`, ikut base path (GitHub Pages pakai subfolder). */
function image(file: string) {
  return `${import.meta.env.BASE_URL}images/${file}`
}

/** Foto asli klinik di `public/images`. */
export const photos = {
  logo: image('logo-zeeta.png'),
  hero: image('resepsionis.jpg'),
  ambassadorPortrait: image('ambassador-2.jpg'),
  promo: image('promo-healthy-face.jpg'),
  consultation: image('konsultasi.jpg'),
}

export const navLinks = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#dokter', label: 'Dokter' },
  { href: '#brand-ambassador', label: 'Ambassador' },
  { href: '#hasil', label: 'Hasil' },
  { href: '#booking', label: 'Kontak' },
]

/** "Why Zeeta" dari company profile klinik. */
export const highlights = [
  {
    title: 'Expert',
    body: 'Dokter berpengalaman & ahli di bidang kecantikan hadirkan solusi perawatan yang tepat.',
  },
  {
    title: 'Kombinasi Metode Perawatan',
    body: 'Kombinasi metode perawatan yang teruji untuk hasil yang paling efektif.',
  },
  {
    title: 'Personalize & Customize',
    body: 'Perawatan & skincare disesuaikan dengan kondisi unik kulit wajah setiap pasien.',
  },
]

/** Angka dari company profile klinik. */
export const stats = [
  { value: 2000, suffix: '+', label: 'Pasien' },
  { value: 60, suffix: '+', label: 'Jenis treatment' },
  { value: 20, suffix: '+', label: 'Produk BPOM' },
]

export const about =
  'Zeeta Beauty Care Jambi adalah klinik kecantikan yang berfokus pada kesehatan kulit wajah di Kabupaten Batang Hari dan sekitarnya. Perawatan estetik dan skincare disesuaikan dengan jenis, kondisi, dan kebutuhan kulit setiap pasien, dalam pengawasan dokter.'

export const ambassadors = [
  { name: 'Yayang Nurizky Ramadhani', image: image('ba-yayang.jpg') },
  { name: 'Salwa Khairotunnisa', image: image('ba-salwa.jpg') },
  { name: 'Miftahul Khoiriah', image: image('ba-miftahul.jpg') },
  { name: 'Anggi Datau', image: image('ba-anggi.jpg') },
  { name: 'Leni Ari Minanti', image: image('ba-leni.jpg') },
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
    price: 'Rp150.000',
    image: image('facial.jpg'),
  },
  {
    id: 'acne',
    name: 'Acne Treatment',
    description: 'Perawatan jerawat aktif dan bekasnya, dipantau dokter.',
    price: 'Rp200.000',
  },
  {
    id: 'peeling',
    name: 'Chemical Peeling',
    description: 'Meratakan tekstur dan warna kulit secara bertahap.',
    price: 'Rp250.000',
  },
  {
    id: 'laser',
    name: 'Laser Rejuvenation',
    description: 'Menyamarkan flek, pori besar, dan tanda penuaan.',
    price: 'Rp500.000',
  },
  {
    id: 'skin-booster',
    name: 'Skin Booster',
    description: 'Hidrasi dari dalam untuk kulit kenyal dan lembap.',
    price: 'Rp1.500.000',
    image: image('skin-booster.jpg'),
  },
  {
    id: 'botox-filler',
    name: 'Botox & Filler',
    description: 'Kontur wajah natural, dikerjakan langsung oleh dokter.',
    price: 'Rp2.500.000',
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
  name: 'dr. Mairezi Fitri, Dipl. CIBTAC',
  image: image('analisa-kulit.jpg'),
  bio: 'Dokter umum dengan sertifikasi internasional CIBTAC di bidang perawatan kecantikan. dr. Mairezi memadukan dasar ilmu kedokteran dengan standar terapi kecantikan internasional, jadi setiap perawatan dimulai dari pemeriksaan kulit yang teliti, dirancang sesuai kebutuhanmu, dan dikerjakan dengan aman. Ia percaya kulit sehat tidak perlu instan, yang penting tepat dan bertahan lama.',
}

export const beforeAfter: {
  treatment: string
  sessions: string
  before?: string
  after?: string
} = {
  treatment: '[Nama treatment]',
  sessions: '[jumlah sesi]',
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
  {
    id: 'testimoni-3',
    quote: '[Kutipan testimoni asli dari pasien.]',
    author: '[Nama pasien]',
    treatment: '[Treatment]',
  },
]

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${clinic.name}, ${clinic.address}`
)}`

export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`
}
