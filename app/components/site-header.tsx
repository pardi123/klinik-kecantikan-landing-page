import { Button } from '~/components/ui/button'
import { clinic, navLinks, photos } from '~/constants/clinic'

export function SiteHeader() {
  return (
    <header className="bg-cream/85 sticky top-0 z-40 border-b border-gray-200/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" aria-label={`${clinic.name} — beranda`}>
          <img src={photos.logo} alt={clinic.name} width={67} height={44} className="h-11 w-auto" />
        </a>
        <nav aria-label="Menu utama" className="hidden gap-7 text-[15px] md:flex">
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
        <Button asChild className="rounded-full px-5">
          <a href="#booking">Booking Konsultasi</a>
        </Button>
      </div>
    </header>
  )
}
