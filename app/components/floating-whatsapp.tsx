import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { whatsappLink } from '~/constants/clinic'

const SHOW_AFTER_PX = 600

/** Tombol chat WhatsApp di pojok, muncul setelah pengunjung melewati hero. */
export function FloatingWhatsapp() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > SHOW_AFTER_PX)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink('Halo, saya mau tanya soal treatment.')}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="bg-brand-500 hover:bg-brand-600 shadow-theme-lg fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full text-white"
        >
          <span className="bg-brand-400 absolute inset-0 -z-10 rounded-full opacity-40 [animation-duration:2.5s] motion-safe:animate-ping" />
          <MessageCircle className="size-6" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
