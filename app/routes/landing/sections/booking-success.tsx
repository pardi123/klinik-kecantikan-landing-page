import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '~/components/ui/button'

type BookingSuccessProps = {
  whatsappUrl: string
  onReset: () => void
}

/** Kartu terima kasih pengganti form setelah booking terkirim. */
export function BookingSuccess({ whatsappUrl, onReset }: BookingSuccessProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      role="status"
      className="shadow-theme-md flex flex-col items-center gap-5 rounded-3xl bg-white p-10 text-center"
    >
      <svg viewBox="0 0 64 64" className="text-brand-500 size-20" aria-hidden="true">
        <motion.circle
          cx="32"
          cy="32"
          r="29"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <motion.path
          d="M20 33l8 8 16-17"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
        />
      </svg>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-4xl font-medium">Terima kasih!</h3>
        <p className="text-gray-600">
          Booking kamu sudah kami terima. Lanjutkan konfirmasi jadwal lewat WhatsApp.
        </p>
      </div>
      <Button asChild size="lg" className="rounded-full px-7">
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          Konfirmasi di WhatsApp →
        </a>
      </Button>
      <button
        type="button"
        onClick={onReset}
        className="text-brand-500 hover:text-brand-600 min-h-11 text-sm font-medium"
      >
        Booking lagi
      </button>
    </motion.div>
  )
}
