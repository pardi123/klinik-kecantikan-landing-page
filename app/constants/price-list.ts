// Price list resmi Zeeta Beauty Care (folder `price-list`, 21 halaman).
// Ubah harga di sini; kartu treatment, section Price List, dan form booking ikut berubah.

export type PriceItem = {
  name: string
  price: number
  /** Batas atas kalau harga berupa rentang ("Rp450.000 s.d Rp825.000"). */
  priceMax?: number
  /** Satuan harga, misalnya "cc" atau "benang". */
  unit?: string
}

export type PriceCategory = {
  id: string
  name: string
  intro: string
  items: PriceItem[]
}

export const priceList: PriceCategory[] = [
  {
    id: 'facial',
    name: 'Facial Treatment',
    intro:
      'Membersihkan, mengangkat sel kulit mati dan komedo, dikombinasikan teknologi estetika untuk kulit kusam, berjerawat, dan flek.',
    items: [
      { name: 'Facial Basic', price: 110_000 },
      { name: 'Facial Acne', price: 165_000 },
      { name: 'Facial Glowing', price: 165_000 },
      { name: 'Facial Flek', price: 190_000 },
      { name: 'Clarifying Facial', price: 220_000 },
      { name: 'Facial Oxyspray', price: 220_000 },
      { name: 'Facial Diamond Peel', price: 300_000 },
      { name: 'Facial Rejuvenation', price: 385_000 },
      { name: 'Facial Hydra', price: 385_000 },
      { name: 'Glass Skin Facial', price: 500_000 },
      { name: 'Facial Hollywood Silk Peel', price: 550_000 },
      { name: 'OXYGeneo Bright Facial', price: 550_000 },
      { name: 'Facial CO2 Carboxy', price: 650_000 },
    ],
  },
  {
    id: 'peeling',
    name: 'Chemical Peeling',
    intro:
      'Eksfoliasi kimia untuk mengangkat sel kulit mati, membuat wajah kusam dan berjerawat tampak segar dan bersih.',
    items: [
      { name: 'Peeling Acne', price: 165_000 },
      { name: 'Peeling Glowing', price: 165_000 },
      { name: 'Peeling Acne Skin Recovery', price: 275_000 },
      { name: 'Peeling Instant Glow', price: 275_000 },
      { name: 'Peeling TCA', price: 275_000 },
      { name: 'Peeling Redness', price: 310_000 },
      { name: 'Peeling Super Lightening', price: 310_000 },
      { name: 'Retinol Peeling', price: 350_000 },
      { name: 'Peeling Big Pore', price: 385_000 },
      { name: 'Peeling Ultimate', price: 385_000 },
    ],
  },
  {
    id: 'laser',
    name: 'Laser ND-Yag',
    intro:
      'Peremajaan kulit untuk flek, melasma, bekas jerawat, pori besar, kerutan halus, hingga menghapus tato.',
    items: [
      { name: 'Laser Pink Lip', price: 330_000 },
      { name: 'Laser Eyebrow Tattoo Removal', price: 440_000 },
      { name: 'Laser Tattoo Removal', price: 450_000, priceMax: 825_000 },
      { name: 'Laser Black Doll Acne', price: 550_000 },
      { name: 'Laser Black Doll Glowing', price: 550_000 },
      { name: 'Laser Melasma', price: 550_000 },
      { name: 'Laser Freckless', price: 550_000 },
      { name: 'Laser Nevus', price: 550_000 },
    ],
  },
  {
    id: 'ipl',
    name: 'IPL Treatment',
    intro:
      'Sinar Xenon (IPL Magneto OPT) untuk hiperpigmentasi, jerawat, kemerahan, peremajaan kulit, dan hair removal.',
    items: [
      { name: 'IPL Full Face Hair Removal', price: 440_000 },
      { name: 'IPL Underarm Hair Removal', price: 440_000 },
      { name: 'IPL Hand/Leg Hair Removal', price: 440_000 },
      { name: 'IPL Brightening Basic', price: 550_000 },
      { name: 'IPL Acne Basic', price: 550_000 },
      { name: 'IPL Melasma Basic', price: 550_000 },
      { name: 'Underarm Glow', price: 660_000 },
      { name: 'IPL Brazilian Removal', price: 660_000 },
      { name: 'IPL Combo Acne', price: 770_000 },
      { name: 'IPL Combo Brightening', price: 770_000 },
      { name: 'IPL Combo Melasma', price: 770_000 },
    ],
  },
  {
    id: 'skin-booster',
    name: 'Skin Booster',
    intro:
      'Injeksi untuk menghidrasi kulit dari dalam, meningkatkan elastisitas, kekencangan, dan cahaya kulit.',
    items: [
      { name: 'Hydra Shine Skin Booster', price: 650_000 },
      { name: 'Zeeta Lumiere Therapy (signature)', price: 850_000 },
      { name: 'Skin Booster DNA Salmon', price: 880_000, unit: 'cc' },
      { name: 'Skin Booster Aqua Shine', price: 880_000, unit: 'cc' },
      { name: 'Skin Booster Aqua Shine', price: 1_650_000, unit: '2 cc' },
      { name: 'Dewy Skin Booster (20 titik)', price: 2_500_000 },
      { name: 'Rejuveyes Booster', price: 2_500_000 },
      { name: 'Baby Shine Fillo Booster', price: 3_850_000, unit: '3,5 cc' },
      { name: 'Skin Booster Starglow Exosome', price: 3_850_000 },
      { name: 'Skin Booster Exorepair', price: 3_850_000 },
      { name: 'Skin Booster LUHILO', price: 5_000_000 },
    ],
  },
  {
    id: 'botox',
    name: 'Botox',
    intro:
      'Botulinum toxin untuk menghaluskan kerutan dan merampingkan kontur wajah. Hasil optimal 7–14 hari, bertahan 3–6 bulan.',
    items: [
      { name: 'Korean Microbotox', price: 2_200_000 },
      { name: 'Botox Korea Upper Face', price: 3_300_000 },
      { name: 'Botox Korea Lower Face', price: 3_300_000 },
      { name: 'Baby Glow Microbotox', price: 3_300_000 },
      { name: 'Botox Korea Full Face', price: 5_500_000 },
      { name: 'Botox Eropa Upper Face', price: 5_500_000 },
      { name: 'Botox Eropa Lower Face', price: 5_500_000 },
      { name: 'Botox Eropa Full Face', price: 7_700_000 },
    ],
  },
  {
    id: 'filler',
    name: 'Filler',
    intro:
      'Hyaluronic acid untuk mengisi volume dan menyempurnakan kontur dagu, hidung, dan bibir.',
    items: [
      { name: 'Filler Bibir (Lip Filler)', price: 2_500_000, unit: 'cc' },
      { name: 'Filler Dagu (Chin Filler)', price: 2_750_000, unit: 'cc' },
      { name: 'Filler Hidung (Nose Filler)', price: 2_750_000, unit: 'cc' },
    ],
  },
  {
    id: 'thread-lift',
    name: 'Thread Lift',
    intro: 'Tanam benang PDO untuk mengencangkan kulit dan membentuk hidung tanpa operasi.',
    items: [
      { name: 'Mono Threadlift Undereye', price: 70_000, unit: 'benang' },
      { name: 'Benang Hidung (Nose Threadlift)', price: 605_000, unit: 'benang' },
      { name: 'Tanam Benang Cuping Hidung (Nose Tip)', price: 660_000, unit: 'benang' },
      { name: 'Tanam Benang Hidung (Nose Threadlift)', price: 2_500_000, unit: '4 benang' },
    ],
  },
  {
    id: 'meso-needle',
    name: 'Mesotherapy Needle',
    intro:
      'Injeksi vitamin, mineral, asam amino, dan enzim dengan jarum steril ke wajah atau area tubuh berlemak.',
    items: [
      { name: 'Meso Derma Glow', price: 660_000 },
      { name: 'Meso Derma Melasma', price: 660_000 },
      { name: 'Meso Derma Acne', price: 660_000 },
      { name: 'Meso DNA Glow', price: 660_000 },
      { name: 'Mesolipo Chubby Cheek', price: 660_000, unit: 'cc' },
      { name: 'Mesolipo Double Chin', price: 660_000, unit: 'cc' },
      { name: 'Meso Stretchmark', price: 660_000, unit: 'area' },
      { name: 'Meso Derma Scars', price: 825_000 },
      { name: 'DNA Salmon with Microneedling', price: 880_000 },
      { name: 'Subsisi Acne', price: 880_000 },
      { name: 'Mesolipo Slimming', price: 880_000 },
    ],
  },
  {
    id: 'meso-non-needle',
    name: 'Mesotherapy Non Needle',
    intro: 'Serum dan vitamin dimasukkan ke kulit tanpa jarum, memakai mesin electrophoresis.',
    items: [
      { name: 'Eye Lifting', price: 110_000 },
      { name: 'Meso Acne', price: 275_000 },
      { name: 'Meso Glow', price: 275_000 },
      { name: 'Meso Flek', price: 275_000 },
    ],
  },
  {
    id: 'infusion',
    name: 'Infusion & Injection',
    intro: 'Infus multivitamin dan suntikan untuk kulit cerah, imunitas, jerawat, dan keloid.',
    items: [
      { name: 'Acne Injection', price: 50_000, unit: '0,2 cc' },
      { name: 'Keloid Injection', price: 150_000, priceMax: 550_000 },
      { name: 'Infus Immune Booster', price: 275_000 },
      { name: 'Infus Whitening Platinum (1x)', price: 935_000 },
      { name: 'Infus Whitening Platinum (3x)', price: 1_870_000 },
    ],
  },
  {
    id: 'fat-apoptosis',
    name: 'Fat Apoptosis',
    intro:
      'Injeksi penghancur lemak tanpa operasi untuk kontur wajah dan tubuh yang lebih ramping.',
    items: [
      { name: 'Face Area 5cc', price: 850_000 },
      { name: 'Face Area 10cc', price: 1_000_000 },
      { name: 'Small Area 10cc', price: 1_000_000 },
      { name: 'Medium Area 20cc', price: 2_000_000 },
      { name: 'Large Area 30cc', price: 3_000_000 },
    ],
  },
  {
    id: 'rf-slimming',
    name: 'RF Body Slimming',
    intro:
      'Gelombang radio frekuensi untuk memecah lemak dan mengencangkan lengan, perut, dan paha.',
    items: [
      { name: 'RF Body Slimming Area Lengan', price: 400_000 },
      { name: 'RF Body Slimming Area Perut', price: 550_000 },
      { name: 'RF Body Slimming Area Paha', price: 550_000 },
      { name: 'RF Body Slimming Full Body', price: 1_500_000 },
    ],
  },
  {
    id: 'electrocauter',
    name: 'Electrocauter',
    intro: 'Bedah kecil untuk mengangkat milia, syringoma, skintag, xanthelasma, dan tahi lalat.',
    items: [
      { name: 'Electrocauter', price: 165_000, priceMax: 550_000 },
      { name: 'Nevus Electrocauter', price: 330_000, priceMax: 770_000 },
    ],
  },
]

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

export function formatRupiah(value: number) {
  return rupiah.format(value).replace(/\s/g, '')
}

export function formatItemPrice(item: PriceItem) {
  const price = item.priceMax
    ? `${formatRupiah(item.price)} – ${formatRupiah(item.priceMax)}`
    : formatRupiah(item.price)
  return item.unit ? `${price} / ${item.unit}` : price
}

export function startingPrice(category: PriceCategory) {
  return Math.min(...category.items.map((item) => item.price))
}

export const priceCategoryById = new Map(priceList.map((category) => [category.id, category]))
