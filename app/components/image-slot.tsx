import { cn } from '~/lib/utils'

type ImageSlotProps = {
  src?: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/** Foto, atau kotak placeholder berlabel selama foto asli belum ada. */
export function ImageSlot({ src, alt, className, loading }: ImageSlotProps) {
  if (src) {
    return <img src={src} alt={alt} loading={loading} className={cn('object-cover', className)} />
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
