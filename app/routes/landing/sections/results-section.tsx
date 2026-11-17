import { ImageSlot } from '~/components/image-slot'
import { Reveal } from '~/components/reveal'
import { testimonials } from '~/constants/clinic'

export function ResultsSection() {
  return (
    <section id="hasil" className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 py-24">
      <Reveal>
        <h2 className="font-heading text-center text-5xl leading-tight font-medium">
          Hasil &amp; cerita pasien
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <Reveal>
          <figure className="flex h-full flex-col gap-3 rounded-[20px] border border-gray-200 bg-white p-4">
            <div className="grid grid-cols-2 gap-2">
              <ImageSlot alt="Sebelum" className="h-[180px] rounded-xl" />
              <ImageSlot alt="Sesudah" className="h-[180px] rounded-xl" />
            </div>
            <figcaption className="text-sm text-gray-600">
              [Nama treatment] · [jumlah sesi]
            </figcaption>
          </figure>
        </Reveal>
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={(index + 1) * 0.1}>
            <blockquote className="bg-blush flex h-full flex-col gap-4 rounded-[20px] p-8">
              <p className="font-heading text-[26px] leading-snug italic">“{item.quote}”</p>
              <cite className="text-sm text-gray-600 not-italic">
                — {item.author}, {item.treatment}
              </cite>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
