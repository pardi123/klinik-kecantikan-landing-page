import { priceList } from '~/constants/price-list'

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
  instagram: 'https://www.instagram.com/zeetabeautycare_jambi',
  tiktok: 'https://www.tiktok.com/@zeetabeautycarejmb',
  facebook: 'https://www.facebook.com/share/1CKxnyU4b7/',
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
  { href: '#harga', label: 'Harga' },
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

/** Kategori yang tampil sebagai kartu "Treatment favorit"; isi & harga dari price list. */
export const featuredTreatments: { categoryId: string; image?: string }[] = [
  { categoryId: 'facial', image: image('facial.jpg') },
  { categoryId: 'peeling', image: image('peeling.jpg') },
  { categoryId: 'laser', image: image('laser.jpg') },
  { categoryId: 'skin-booster', image: image('skin-booster.jpg') },
  { categoryId: 'botox' },
  { categoryId: 'filler' },
]

/** Pilihan di form booking: konsultasi dulu, lalu semua kategori price list. */
export const bookingOptions = [
  { id: 'konsultasi', name: 'Konsultasi dulu' },
  ...priceList.map(({ id, name }) => ({ id, name })),
]

export const DEFAULT_BOOKING_OPTION = bookingOptions[0].id

export const bookingOptionNames = new Map(bookingOptions.map(({ id, name }) => [id, name]))

export const doctor: { name: string; bio: string; image?: string } = {
  name: 'dr. Mairezi Fitri, Dipl. CIBTAC',
  image: image('analisa-kulit.jpg'),
  bio: 'Dokter umum dengan sertifikasi internasional CIBTAC di bidang perawatan kecantikan. dr. Mairezi memadukan dasar ilmu kedokteran dengan standar terapi kecantikan internasional, jadi setiap perawatan dimulai dari pemeriksaan kulit yang teliti, dirancang sesuai kebutuhanmu, dan dikerjakan dengan aman. Ia percaya kulit sehat tidak perlu instan, yang penting tepat dan bertahan lama.',
}

/** Foto sebelum/sesudah pasien asli (mata ditutup logo). `sessions` hanya diisi bila jumlah sesi diketahui. */
export const beforeAfters: {
  id: string
  treatment: string
  sessions?: string
  before: string
  after: string
}[] = [
  {
    id: 'facial-hydra',
    treatment: 'Facial Hydra',
    before: image('hasil-facial-hydra-before.jpg'),
    after: image('hasil-facial-hydra-after.jpg'),
  },
  {
    id: 'peeling-super-lightening',
    treatment: 'Peeling Super Lightening',
    before: image('hasil-peeling-before.jpg'),
    after: image('hasil-peeling-after.jpg'),
  },
  {
    id: 'clarifying-facial',
    treatment: 'Clarifying Facial',
    before: image('hasil-clarifying-before.jpg'),
    after: image('hasil-clarifying-after.jpg'),
  },
  {
    id: 'skinbooster-dna-salmon',
    treatment: 'Skinbooster DNA Salmon',
    sessions: '2× sesi',
    before: image('hasil-skinbooster-before.jpg'),
    after: image('hasil-skinbooster-after.jpg'),
  },
]

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

/** Akun sosial media yang tampil di navbar & footer. */
export const socialLinks = [
  { id: 'instagram', label: 'Instagram', href: clinic.instagram },
  { id: 'tiktok', label: 'TikTok', href: clinic.tiktok },
  { id: 'facebook', label: 'Facebook', href: clinic.facebook },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: whatsappLink('Halo Zeeta, saya mau tanya soal treatment.'),
  },
] as const
