import { z } from 'zod'
import { CONSULTATION_ID, services } from '~/constants/clinic'

const serviceIds = [CONSULTATION_ID, ...services.map((service) => service.id)] as [
  string,
  ...string[],
]

const todayIso = () => new Date().toISOString().slice(0, 10)

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Nama minimal 2 huruf').max(100),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, ''))
    .pipe(z.string().regex(/^(\+62|62|0)8\d{7,12}$/, 'Nomor WhatsApp tidak valid')),
  service: z.enum(serviceIds, { error: 'Pilih treatment' }),
  date: z.iso
    .date('Pilih tanggal kunjungan')
    .refine((value) => value >= todayIso(), 'Tanggal tidak boleh lewat'),
  notes: z.string().trim().max(500).optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>

export type BookingFieldErrors = Partial<Record<keyof BookingInput, string[]>>
