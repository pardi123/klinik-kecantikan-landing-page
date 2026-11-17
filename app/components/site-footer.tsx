import { clinic, photos } from '~/constants/clinic'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-gray-600">
      <img src={photos.logo} alt={clinic.name} width={73} height={48} className="h-12 w-auto" />
      <div className="flex gap-5">
        <a href={clinic.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={clinic.tiktok} target="_blank" rel="noreferrer">
          TikTok
        </a>
      </div>
      <span>
        © {year} {clinic.name}
      </span>
    </footer>
  )
}
