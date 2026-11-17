import { z } from 'zod'
import { clinic } from '~/constants/clinic'
import { type BookingResult, bookingSchema } from '~/schemas/booking'
import { BookingApiError, createBooking } from '~/services/booking'
import type { Route } from './+types/page'
import { BookingSection } from './sections/booking-section'
import { BrandAmbassadorSection } from './sections/brand-ambassador-section'
import { DoctorSection } from './sections/doctor-section'
import { HeroSection } from './sections/hero-section'
import { HighlightsSection } from './sections/highlights-section'
import { PromoSection } from './sections/promo-section'
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

export async function clientAction({ request }: Route.ClientActionArgs): Promise<BookingResult> {
  const formData = await request.formData()
  const parsed = bookingSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return { status: 'invalid', fieldErrors: z.flattenError(parsed.error).fieldErrors }
  }

  try {
    const { whatsappUrl } = await createBooking(parsed.data)
    return { status: 'sent', whatsappUrl }
  } catch (err) {
    if (err instanceof BookingApiError) {
      return { status: 'failed', message: err.message }
    }
    throw err
  }
}

export default function Page() {
  return (
    <main id="top">
      <HeroSection />
      <HighlightsSection />
      <PromoSection />
      <ServicesSection />
      <DoctorSection />
      <BrandAmbassadorSection />
      <ResultsSection />
      <BookingSection />
    </main>
  )
}
