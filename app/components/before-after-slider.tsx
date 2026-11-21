import { ChevronsLeftRight } from 'lucide-react'
import { useState } from 'react'
import { ImageSlot } from '~/components/image-slot'

type BeforeAfterSliderProps = {
  before?: string
  after?: string
  /** Nama treatment untuk teks alternatif foto. */
  label?: string
  className?: string
}

/** Dua foto ditumpuk; foto "sebelum" dipotong sesuai posisi slider. */
export function BeforeAfterSlider({ before, after, label, className }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)

  function handleSlide(event: React.ChangeEvent<HTMLInputElement>) {
    setPosition(Number(event.target.value))
  }

  return (
    <div className={className}>
      {/* Foto pasien potret 4:5. */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <ImageSlot
          src={after}
          alt={`Foto sesudah${label ? ` ${label}` : ''}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <ImageSlot
            src={before}
            alt={`Foto sebelum${label ? ` ${label}` : ''}`}
            loading="lazy"
            className="bg-blush h-full w-full"
          />
        </div>
        <div
          aria-hidden="true"
          className="bg-cream pointer-events-none absolute inset-y-0 w-0.5"
          style={{ left: `${position}%` }}
        >
          <span className="bg-cream shadow-theme-md absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm text-gray-800">
            <ChevronsLeftRight className="size-4" />
          </span>
        </div>
        <span className="text-cream absolute top-3 left-3 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold">
          Sebelum
        </span>
        <span className="bg-cream absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-gray-800">
          Sesudah
        </span>
      </div>
      <label className="mt-3 flex flex-col gap-1 text-sm font-medium text-gray-600">
        Geser untuk membandingkan
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={handleSlide}
          className="accent-brand-500 h-11 w-full cursor-ew-resize"
        />
      </label>
    </div>
  )
}
