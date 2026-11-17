import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ImageSlot } from '~/components/image-slot'
import { Button } from '~/components/ui/button'
import { clinic, photos } from '~/constants/clinic'
import { cn } from '~/lib/utils'

const stagger: Variants = { show: { transition: { staggerChildren: 0.1 } } }

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: '0.4em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const HEADLINE = 'Kulit sehat yang terlihat alami, dirawat oleh dokter.'
const HIGHLIGHT = 'alami,'

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, delay: 0.2 } },
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={reduceMotion ? false : 'hidden'}
      animate="show"
      variants={stagger}
      className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 pt-12 pb-20"
    >
      <motion.div variants={stagger} className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
        <motion.p
          variants={fadeUp}
          className="text-brand-500 text-[13px] font-semibold tracking-[3px] uppercase"
        >
          {clinic.tagline}
        </motion.p>
        <motion.h1
          variants={stagger}
          aria-label={HEADLINE}
          className="font-heading text-[clamp(44px,6vw,72px)] leading-[1.05] font-medium"
        >
          <HeadlineWords />
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-[520px] text-lg text-gray-600">
          Perawatan wajah dan tubuh yang disesuaikan dengan kondisi kulitmu — dimulai dari
          konsultasi dan analisa kulit bersama dokter estetika.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href="#booking">Jadwalkan Konsultasi</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-gray-800 bg-transparent px-7 text-gray-800"
          >
            <a href="#layanan">Lihat Treatment</a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={zoomIn} className="relative min-w-0 flex-[1_1_380px]">
        <div className="h-[520px] w-full overflow-hidden rounded-t-[240px] rounded-b-3xl">
          <ImageSlot
            src={photos.hero}
            alt={`Resepsionis klinik ${clinic.name}`}
            className="motion-safe:animate-breathe h-full w-full object-[50%_60%]"
          />
        </div>
        <motion.figure
          variants={fadeUp}
          className="shadow-theme-lg absolute -bottom-8 -left-4 w-[220px] overflow-hidden rounded-2xl border-4 border-white bg-white sm:-left-10"
        >
          <img
            src={photos.ambassadorPortrait}
            alt="Salwa Khairotunnisa, brand ambassador Zeeta"
            width={436}
            height={326}
            className="h-[165px] w-full object-cover"
          />
          <figcaption className="flex flex-col px-3 py-2">
            <span className="text-sm font-semibold text-gray-800">Salwa Khairotunnisa</span>
            <span className="text-xs text-gray-600">Brand Ambassador</span>
          </figcaption>
        </motion.figure>
      </motion.div>
    </motion.section>
  )
}

/** Judul muncul per kata; kata kunci berubah jadi rose setelah semua kata tampil. */
function HeadlineWords() {
  return HEADLINE.split(' ').map((text) => (
    <motion.span
      key={text}
      aria-hidden="true"
      variants={word}
      className={cn(
        'mr-[0.25em] inline-block',
        text === HIGHLIGHT && 'text-brand-500 motion-safe:animate-ink italic'
      )}
    >
      {text}
    </motion.span>
  ))
}
