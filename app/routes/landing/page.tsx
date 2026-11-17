import { data } from 'react-router'
import { clinic } from '~/constants/clinic'
import { bookingSchema } from '~/schemas/booking'
import { BookingApiError, createBooking } from '~/services/booking.server'
import type { Route } from './+types/page'
import { BookingSection } from './sections/booking-section'
import { DoctorSection } from './sections/doctor-section'
import { HeroSection } from './sections/hero-section'
import { HighlightsSection } from './sections/highlights-section'
import { ResultsSection } from './sections/results-section'
import { ServicesSection } from './sections/services-section'

export function meta(_props: Route.MetaArgs) {
  return [
    { title: `${clinic.name} — ${clinic.tagline}` },
    {
      name: 'description',
      content:
        'Perawatan wajah dan tubuh oleh dokter estetika. Konsultasi, analisa kulit, dan booking treatment online.',
    },
  ]
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const parsed = bookingSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return data(
      { ok: false as const, fieldErrors: parsed.error.flatten().fieldErrors, error: null },
      { status: 400 }
    )
  }

  try {
    const { whatsappUrl } = await createBooking(parsed.data)
    return { ok: true as const, whatsappUrl }
  } catch (err) {
    if (err instanceof BookingApiError) {
      return data({ ok: false as const, fieldErrors: {}, error: err.message }, { status: 502 })
    }
    throw err
  }
}

export default function Page() {
  return (
    <main id="top">
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <DoctorSection />
      <ResultsSection />
      <BookingSection />
    </main>
  )
}
