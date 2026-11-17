import { ImageSlot } from '~/components/image-slot'
import { Reveal } from '~/components/reveal'
import { services } from '~/constants/clinic'

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-6 py-24"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-heading text-5xl leading-tight font-medium">Treatment favorit</h2>
        <a href="#booking" className="text-brand-500 hover:text-brand-600 font-medium">
          Booking sekarang →
        </a>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={(index % 3) * 0.1}>
            <article className="hover:shadow-theme-lg flex h-full flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-white transition duration-300 hover:-translate-y-1.5">
              <ImageSlot
                src={service.image}
                alt={`Foto ${service.name}`}
                className="h-[200px] w-full"
              />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-heading text-[26px] font-semibold">{service.name}</h3>
                <p className="text-[15px] text-gray-600">{service.description}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-600">
                    Mulai <strong className="text-gray-800">{service.price}</strong>
                  </span>
                  <a
                    href={`?treatment=${service.id}#booking`}
                    className="text-brand-500 hover:text-brand-600 text-sm font-semibold"
                  >
                    Booking →
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
