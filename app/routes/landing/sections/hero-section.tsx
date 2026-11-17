import { motion, useReducedMotion } from 'framer-motion'
import { ImageSlot } from '~/components/image-slot'
import { Button } from '~/components/ui/button'
import { clinic } from '~/constants/clinic'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const fadeUp = reduceMotion ? false : { opacity: 0, y: 24 }

  return (
    <section className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 pt-12 pb-20">
      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
        <motion.p
          initial={fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-500 text-[13px] font-semibold tracking-[3px] uppercase"
        >
          {clinic.tagline}
        </motion.p>
        <motion.h1
          initial={fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-[clamp(44px,6vw,72px)] leading-[1.05] font-medium"
        >
          Kulit sehat yang terlihat <em className="text-brand-500">alami</em>, dirawat oleh dokter.
        </motion.h1>
        <motion.p
          initial={fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[520px] text-lg text-gray-600"
        >
          Perawatan wajah dan tubuh yang disesuaikan dengan kondisi kulitmu — dimulai dari
          konsultasi dan analisa kulit bersama dokter estetika.
        </motion.p>
        <motion.div
          initial={fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
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
      </div>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="min-w-0 flex-[1_1_380px]"
      >
        <ImageSlot
          alt="Foto utama: model / suasana klinik"
          className="h-[520px] w-full rounded-t-[240px] rounded-b-3xl"
        />
      </motion.div>
    </section>
  )
}
