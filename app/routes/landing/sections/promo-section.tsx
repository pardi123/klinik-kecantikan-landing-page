import { CountUp } from '~/components/count-up'
import { Reveal } from '~/components/reveal'
import { Button } from '~/components/ui/button'
import { about, clinic, photos, stats } from '~/constants/clinic'

export function PromoSection() {
  return (
    <section aria-label="Tentang Zeeta" className="mx-auto max-w-6xl px-6 pt-24">
      <div className="bg-linen flex flex-wrap overflow-hidden rounded-[32px]">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6 p-8 sm:p-12">
          <Reveal className="flex flex-col gap-4">
            <p className="text-brand-500 text-[13px] font-semibold tracking-[3px] uppercase">
              Sejak {clinic.since}
            </p>
            <h2 className="font-heading text-4xl leading-tight font-medium sm:text-5xl">
              Your healthy face <em className="text-brand-500">represents</em> you.
            </h2>
            <p className="text-[17px] text-gray-600">{about}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 rounded-2xl bg-white px-4 py-5 text-center"
                >
                  <dd className="font-heading text-brand-500 order-1 text-3xl font-semibold sm:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="order-2 text-xs font-medium text-gray-600 sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.2}>
            <Button asChild size="lg" className="rounded-full px-7">
              <a href="#booking">Mulai Perawatanmu</a>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative min-h-[420px] min-w-0 flex-[1_1_360px]">
          <img
            src={photos.promo}
            alt={`Brand ambassador ${clinic.name} memakai produk Zeeta`}
            width={675}
            height={750}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
          />
        </Reveal>
      </div>
    </section>
  )
}
