import { cn } from '~/lib/utils'

type ImageSlotProps = {
  src?: string
  alt: string
  className?: string
}

/** Foto, atau kotak placeholder berlabel selama foto asli belum ada. */
export function ImageSlot({ src, alt, className }: ImageSlotProps) {
  if (src) {
    return <img src={src} alt={alt} className={cn('object-cover', className)} />
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'bg-sand flex items-center justify-center p-6 text-center text-sm text-gray-500',
        className
      )}
    >
      [{alt}]
    </div>
  )
}
