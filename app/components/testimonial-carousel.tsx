import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '~/components/ui/button'
import { testimonials } from '~/constants/clinic'
import { cn } from '~/lib/utils'

export function TestimonialCarousel() {
  const reduceMotion = useReducedMotion()
  const plugins = useMemo(
    () => (reduceMotion ? [] : [Autoplay({ delay: 6000, stopOnInteraction: true })]),
    [reduceMotion]
  )
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, plugins)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!embla) return
    function handleSelect() {
      setSelected(embla?.selectedScrollSnap() ?? 0)
    }
    embla.on('select', handleSelect)
    return () => {
      embla.off('select', handleSelect)
    }
  }, [embla])

  return (
    <div className="bg-blush flex h-full flex-col gap-6 rounded-[20px] p-8">
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="flex min-w-0 flex-[0_0_100%] flex-col gap-4">
              <p className="font-heading text-[26px] leading-snug italic">“{item.quote}”</p>
              <cite className="text-sm text-gray-600 not-italic">
                — {item.author}, {item.treatment}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Testimoni ${index + 1}`}
              aria-current={index === selected}
              onClick={() => embla?.scrollTo(index)}
              className="flex size-6 items-center justify-center"
            >
              <span
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === selected ? 'bg-brand-500 w-6' : 'w-2 bg-gray-300'
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Testimoni sebelumnya"
            onClick={() => embla?.scrollPrev()}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Testimoni berikutnya"
            onClick={() => embla?.scrollNext()}
            className="rounded-full bg-transparent"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
