import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ImageSlot } from '~/components/image-slot'
import { Reveal } from '~/components/reveal'
import { Button } from '~/components/ui/button'
import { doctor } from '~/constants/clinic'

export function DoctorSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40])

  return (
    <section ref={sectionRef} id="dokter" className="text-cream scroll-mt-24 bg-gray-800">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 py-24">
        <Reveal className="min-w-0 flex-[1_1_380px]">
          <div className="h-[440px] overflow-hidden rounded-3xl">
            <motion.div style={{ y: photoY }} className="-my-10 h-[520px]">
              <ImageSlot
                src={doctor.image}
                alt="Dokter menjelaskan hasil analisa kulit pasien"
                className="h-full w-full bg-gray-700 text-gray-300"
              />
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
          <p className="text-brand-200 text-[13px] font-semibold tracking-[3px] uppercase">
            Dokter Kami
          </p>
          <h2 className="font-heading text-5xl leading-tight font-medium">{doctor.name}</h2>
          <p className="text-[17px] text-gray-300">{doctor.bio}</p>
          <Button
            asChild
            size="lg"
            className="bg-cream self-start rounded-full px-7 text-gray-800 hover:bg-white"
          >
            <a href="#booking">Konsultasi dengan dokter</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
