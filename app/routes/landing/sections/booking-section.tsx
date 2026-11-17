import { useEffect, useMemo, useRef } from 'react'
import { useFetcher, useSearchParams } from 'react-router'
import { toast } from 'sonner'
import { Reveal } from '~/components/reveal'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { NativeSelect } from '~/components/ui/native-select'
import { Textarea } from '~/components/ui/textarea'
import { CONSULTATION_ID, clinic, services } from '~/constants/clinic'
import type { BookingFieldErrors } from '~/schemas/booking'
import type { action } from '../page'

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null
  return <p className="text-error-600 text-sm">{messages[0]}</p>
}

export function BookingSection() {
  const fetcher = useFetcher<typeof action>()
  const formRef = useRef<HTMLFormElement>(null)
  const [searchParams] = useSearchParams()
  const isSubmitting = fetcher.state !== 'idle'

  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const defaultService = useMemo(() => {
    const requested = searchParams.get('treatment')
    return services.some((service) => service.id === requested)
      ? (requested as string)
      : CONSULTATION_ID
  }, [searchParams])

  const fieldErrors: BookingFieldErrors =
    fetcher.data && !fetcher.data.ok ? fetcher.data.fieldErrors : {}

  useEffect(() => {
    if (fetcher.state !== 'idle' || !fetcher.data) return

    if (fetcher.data.ok) {
      toast.success('Booking terkirim! Lanjutkan konfirmasi lewat WhatsApp.')
      formRef.current?.reset()
      window.open(fetcher.data.whatsappUrl, '_blank', 'noopener')
      return
    }
    if (fetcher.data.error) {
      toast.error(fetcher.data.error)
    }
  }, [fetcher.state, fetcher.data])

  return (
    <section id="booking" className="bg-blush scroll-mt-24">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-14 px-6 py-24">
        <Reveal className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
          <h2 className="font-heading text-5xl leading-tight font-medium">
            Mulai dari konsultasi.
          </h2>
          <p className="text-[17px] text-gray-600">
            Isi form, tim kami akan menghubungi lewat WhatsApp untuk konfirmasi jadwal.
          </p>
          <dl className="mt-4 flex flex-col gap-1.5 text-[15px]">
            <div>
              <dt className="inline font-semibold">Alamat</dt> —{' '}
              <dd className="inline">{clinic.address}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Jam buka</dt> —{' '}
              <dd className="inline">{clinic.hours}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 flex-[1_1_440px]">
          <fetcher.Form
            ref={formRef}
            method="post"
            noValidate
            className="shadow-theme-md flex flex-col gap-4 rounded-3xl bg-white p-8"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Nama lengkap</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Nama kamu"
                aria-invalid={Boolean(fieldErrors.name)}
              />
              <FieldError messages={fieldErrors.name} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone">Nomor WhatsApp</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="08xx-xxxx-xxxx"
                aria-invalid={Boolean(fieldErrors.phone)}
              />
              <FieldError messages={fieldErrors.phone} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="service">Treatment yang diminati</Label>
              <NativeSelect
                key={defaultService}
                id="service"
                name="service"
                defaultValue={defaultService}
                aria-invalid={Boolean(fieldErrors.service)}
              >
                <option value={CONSULTATION_ID}>Konsultasi dulu</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </NativeSelect>
              <FieldError messages={fieldErrors.service} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="date">Tanggal kunjungan</Label>
              <Input
                id="date"
                name="date"
                type="date"
                min={today}
                aria-invalid={Boolean(fieldErrors.date)}
              />
              <FieldError messages={fieldErrors.date} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes">Catatan (opsional)</Label>
              <Textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Keluhan kulit, jam yang diinginkan, dll."
              />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 rounded-full">
              {isSubmitting ? 'Mengirim…' : 'Kirim & Booking'}
            </Button>
          </fetcher.Form>
        </Reveal>
      </div>
    </section>
  )
}
