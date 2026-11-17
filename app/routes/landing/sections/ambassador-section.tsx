import { Reveal } from '~/components/reveal'
import { Button } from '~/components/ui/button'
import { clinic, photos } from '~/constants/clinic'

export function AmbassadorSection() {
  return (
    <section aria-label="Brand ambassador" className="mx-auto max-w-6xl px-6 pt-24">
      <div className="flex flex-wrap items-center gap-12 overflow-hidden rounded-3xl bg-white p-6 sm:p-10">
        <Reveal className="min-w-0 flex-[1_1_320px]">
          <img
            src={photos.ambassadorPose}
            alt={`Brand ambassador ${clinic.name}`}
            width={436}
            height={326}
            loading="lazy"
            className="mx-auto w-full max-w-[436px] rounded-2xl object-cover"
          />
        </Reveal>
        <Reveal delay={0.1} className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
          <p className="text-brand-500 text-[13px] font-semibold tracking-[3px] uppercase">
            Brand Ambassador
          </p>
          <h2 className="font-heading text-4xl leading-tight font-medium sm:text-5xl">
            Cantik alami, percaya diri setiap hari.
          </h2>
          <p className="text-[17px] text-gray-600">
            Glowing yang terlihat sehat, bukan berlebihan. Itu yang kami jaga di setiap perawatan{' '}
            {clinic.name}, dari facial rutin sampai treatment dokter.
          </p>
          <Button asChild size="lg" className="self-start rounded-full px-7">
            <a href="#layanan">Lihat Treatment</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
