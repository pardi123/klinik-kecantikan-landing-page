import { SocialLinks } from '~/components/social-links'
import { clinic, photos } from '~/constants/clinic'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-gray-600">
      <img src={photos.logo} alt={clinic.name} width={73} height={48} className="h-12 w-auto" />
      <SocialLinks showLabel />
      <span>
        © {year} {clinic.name}
      </span>
    </footer>
  )
}
