import { BeforeAfterSlider } from '~/components/before-after-slider'
import { Reveal } from '~/components/reveal'
import { TestimonialCarousel } from '~/components/testimonial-carousel'
import { beforeAfters } from '~/constants/clinic'

export function ResultsSection() {
  return (
    <section id="hasil" className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 py-24">
      <Reveal>
        <h2 className="font-heading text-center text-5xl leading-tight font-medium">
          Hasil &amp; cerita pasien
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {beforeAfters.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <figure className="flex h-full flex-col rounded-[20px] border border-gray-200 bg-white p-4">
              <BeforeAfterSlider before={item.before} after={item.after} label={item.treatment} />
              <figcaption className="mt-1 text-sm font-medium text-gray-800">
                {item.treatment}
                {item.sessions && (
                  <span className="font-normal text-gray-600"> · {item.sessions}</span>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mx-auto w-full max-w-2xl">
          <TestimonialCarousel />
        </div>
      </Reveal>
    </section>
  )
}
