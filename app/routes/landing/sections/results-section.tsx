import { BeforeAfterSlider } from '~/components/before-after-slider'
import { Reveal } from '~/components/reveal'
import { TestimonialCarousel } from '~/components/testimonial-carousel'
import { beforeAfter } from '~/constants/clinic'

export function ResultsSection() {
  return (
    <section id="hasil" className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 py-24">
      <Reveal>
        <h2 className="font-heading text-center text-5xl leading-tight font-medium">
          Hasil &amp; cerita pasien
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        <Reveal>
          <figure className="flex h-full flex-col rounded-[20px] border border-gray-200 bg-white p-4">
            <BeforeAfterSlider before={beforeAfter.before} after={beforeAfter.after} />
            <figcaption className="mt-1 text-sm text-gray-600">
              {beforeAfter.treatment} · {beforeAfter.sessions}
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  )
}
