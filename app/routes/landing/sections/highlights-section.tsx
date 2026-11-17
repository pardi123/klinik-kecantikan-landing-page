import { Reveal } from '~/components/reveal'
import { highlights } from '~/constants/clinic'

export function HighlightsSection() {
  return (
    <section aria-label="Why Zeeta" className="bg-blush">
      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8 px-6 py-10">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="flex flex-col gap-1">
            <strong className="font-heading text-[22px] font-semibold">{item.title}</strong>
            <span className="text-[15px] text-gray-600">{item.body}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
