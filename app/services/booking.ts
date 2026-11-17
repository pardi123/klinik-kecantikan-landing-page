import { bookingOptionNames, whatsappLink } from '~/constants/clinic'
import type { BookingInput } from '~/schemas/booking'

export class BookingApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BookingApiError'
  }
}

export function bookingWhatsappMessage(input: BookingInput) {
  return [
    `Halo, saya mau booking.`,
    `Nama: ${input.name}`,
    `No. WA: ${input.phone}`,
    `Treatment: ${bookingOptionNames.get(input.service)}`,
    `Tanggal: ${input.date}`,
    input.notes ? `Catatan: ${input.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

/**
 * Kirim booking ke sistem klinik kalau `VITE_BOOKING_API_URL` sudah diisi.
 * Jalan di browser, jadi bisa dipakai di hosting statis (GitHub Pages).
 * Sebelum backend-nya ada, booking diteruskan lewat WhatsApp saja.
 */
export async function createBooking(input: BookingInput) {
  const whatsappUrl = whatsappLink(bookingWhatsappMessage(input))
  const apiUrl = import.meta.env.VITE_BOOKING_API_URL

  if (!apiUrl) {
    return { whatsappUrl }
  }

  let response: Response
  try {
    response = await fetch(`${apiUrl}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
  } catch {
    throw new BookingApiError('Tidak dapat terhubung ke server booking')
  }

  if (!response.ok) {
    throw new BookingApiError('Booking gagal dikirim, coba lagi atau hubungi kami via WhatsApp')
  }

  return { whatsappUrl }
}
