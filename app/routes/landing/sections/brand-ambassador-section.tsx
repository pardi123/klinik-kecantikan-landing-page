import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Reveal } from '~/components/reveal'
import { ambassadors, clinic } from '~/constants/clinic'

const list: Variants = { show: { transition: { staggerChildren: 0.12 } } }

const card: Variants = {
  hidden: { opacity: 0, y: 40, rotate: -2 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function BrandAmbassadorSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="brand-ambassador" className="bg-linen scroll-mt-24 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <p className="text-brand-500 text-[13px] font-semibold tracking-[3px] uppercase">
            {clinic.name}
          </p>
          <h2 className="font-heading text-5xl leading-tight font-medium">
            Meet Our Brand Ambassador
          </h2>
        </Reveal>
        <motion.ul
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={list}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
        >
          {ambassadors.map((ambassador) => (
            <motion.li
              key={ambassador.name}
              variants={card}
              whileHover={reduceMotion ? undefined : { y: -10, rotate: -1.5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex w-[220px] shrink-0 snap-center flex-col items-center gap-3 lg:w-auto"
            >
              <img
                src={ambassador.image}
                alt={ambassador.name}
                width={418}
                height={598}
                loading="lazy"
                className="w-full drop-shadow-[0_14px_24px_rgba(43,34,32,0.12)]"
              />
              <span className="text-center text-[15px] font-semibold text-gray-800">
                {ambassador.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
