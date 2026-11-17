import { z } from 'zod'
import { bookingOptionNames } from '~/constants/clinic'
import { todayInClinic } from '~/lib/date'

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Nama minimal 2 huruf').max(100),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, ''))
    .pipe(z.string().regex(/^(\+62|62|0)8\d{7,12}$/, 'Nomor WhatsApp tidak valid')),
  service: z.string().refine((id) => bookingOptionNames.has(id), 'Pilih treatment'),
  date: z.iso
    .date('Pilih tanggal kunjungan')
    .refine((value) => value >= todayInClinic(), 'Tanggal tidak boleh lewat'),
  notes: z.string().trim().max(500).optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>

export type BookingFieldErrors = Partial<Record<keyof BookingInput, string[]>>

/** Hasil action booking: satu status, satu bentuk data. */
export type BookingResult =
  | { status: 'invalid'; fieldErrors: BookingFieldErrors }
  | { status: 'failed'; message: string }
  | { status: 'sent'; whatsappUrl: string }
