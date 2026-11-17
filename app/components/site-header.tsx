import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { SocialLinks } from '~/components/social-links'
import { Button } from '~/components/ui/button'
import { clinic, navLinks, photos } from '~/constants/clinic'
import { cn } from '~/lib/utils'

export function SiteHeader() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 8)
  })

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b backdrop-blur transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'bg-cream/90 shadow-theme-md border-gray-200/60'
          : 'bg-cream/60 border-transparent'
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" aria-label={`${clinic.name} — beranda`} className="shrink-0">
          <img src={photos.logo} alt={clinic.name} width={67} height={44} className="h-11 w-auto" />
        </a>
        <nav aria-label="Menu utama" className="hidden gap-7 text-[15px] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-500 text-gray-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SocialLinks className="hidden sm:flex" />
          <Button asChild className="rounded-full px-5">
            <a href="#booking">Booking</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
