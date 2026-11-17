import type { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { socialLinks } from '~/constants/clinic'
import { cn } from '~/lib/utils'

const icons: Record<(typeof socialLinks)[number]['id'], IconType> = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
}

type SocialLinksProps = {
  className?: string
  showLabel?: boolean
}

export function SocialLinks({ className, showLabel = false }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {socialLinks.map((social) => {
        const Icon = icons[social.id]
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={showLabel ? undefined : social.label}
              className="hover:text-brand-500 hover:bg-blush flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-2 text-gray-700 transition-colors"
            >
              <Icon className="size-5" aria-hidden="true" />
              {showLabel && <span className="text-sm">{social.label}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
