import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useFetcher, useSearchParams } from 'react-router'
import { toast } from 'sonner'
import { FormField } from '~/components/form-field'
import { ImageSlot } from '~/components/image-slot'
import { Reveal } from '~/components/reveal'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { NativeSelect } from '~/components/ui/native-select'
import { Textarea } from '~/components/ui/textarea'
import {
  bookingOptionNames,
  bookingOptions,
  clinic,
  DEFAULT_BOOKING_OPTION,
  mapsLink,
  photos,
} from '~/constants/clinic'
import { todayInClinic } from '~/lib/date'
import type { BookingResult } from '~/schemas/booking'
import { BookingSuccess } from './booking-success'

export function BookingSection() {
  const fetcher = useFetcher<BookingResult>()
  const [dismissed, setDismissed] = useState<BookingResult>()
  const [searchParams] = useSearchParams()
  const isSubmitting = fetcher.state !== 'idle'
  const result = isSubmitting ? undefined : fetcher.data

  const today = useMemo(() => todayInClinic(), [])
  const defaultService = useMemo(() => {
    const requested = searchParams.get('treatment')
    return requested && bookingOptionNames.has(requested) ? requested : DEFAULT_BOOKING_OPTION
  }, [searchParams])

  const fieldErrors = result?.status === 'invalid' ? result.fieldErrors : {}
  const sent = result?.status === 'sent' && result !== dismissed ? result : undefined

  function handleReset() {
    setDismissed(result)
  }

  useEffect(() => {
    if (result?.status === 'failed') {
      toast.error(result.message)
    }
  }, [result])

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
              <dd className="inline">
                {clinic.address} ·{' '}
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-500 hover:text-brand-600 font-medium"
                >
                  Lihat di Maps
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold">Jam buka</dt> —{' '}
              <dd className="inline">{clinic.hours}</dd>
            </div>
          </dl>
          <ImageSlot
            src={photos.consultation}
            alt="Sesi konsultasi bersama dokter"
            className="mt-4 h-[320px] w-full rounded-3xl object-[50%_40%]"
          />
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 flex-[1_1_440px]">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <BookingSuccess key="success" whatsappUrl={sent.whatsappUrl} onReset={handleReset} />
            ) : (
              <motion.div key="form" exit={{ opacity: 0, y: -16 }}>
                <fetcher.Form
                  method="post"
                  noValidate
                  className="shadow-theme-md flex flex-col gap-4 rounded-3xl bg-white p-8"
                >
                  <FormField id="name" label="Nama lengkap" errors={fieldErrors.name}>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Nama kamu"
                      aria-invalid={Boolean(fieldErrors.name)}
                    />
                  </FormField>
                  <FormField id="phone" label="Nomor WhatsApp" errors={fieldErrors.phone}>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="08xx-xxxx-xxxx"
                      aria-invalid={Boolean(fieldErrors.phone)}
                    />
                  </FormField>
                  <FormField
                    id="service"
                    label="Treatment yang diminati"
                    errors={fieldErrors.service}
                  >
                    <NativeSelect
                      key={defaultService}
                      id="service"
                      name="service"
                      defaultValue={defaultService}
                      aria-invalid={Boolean(fieldErrors.service)}
                    >
                      {bookingOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormField>
                  <FormField id="date" label="Tanggal kunjungan" errors={fieldErrors.date}>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      aria-invalid={Boolean(fieldErrors.date)}
                    />
                  </FormField>
                  <FormField id="notes" label="Catatan (opsional)" errors={fieldErrors.notes}>
                    <Textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Keluhan kulit, jam yang diinginkan, dll."
                    />
                  </FormField>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="mt-2 rounded-full"
                  >
                    {isSubmitting ? 'Mengirim…' : 'Kirim & Booking'}
                  </Button>
                </fetcher.Form>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
