import { describe, expect, it } from 'vitest'
import { bookingSchema } from './booking'

const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10)

const valid = {
  name: 'Rina',
  phone: '0812-3456-7890',
  service: 'facial-glow',
  date: tomorrow,
}

describe('bookingSchema', () => {
  it('menerima booking valid dan merapikan nomor WA', () => {
    const result = bookingSchema.parse(valid)
    expect(result.phone).toBe('081234567890')
  })

  it('menolak nomor WA yang bukan 08/62', () => {
    expect(bookingSchema.safeParse({ ...valid, phone: '12345' }).success).toBe(false)
  })

  it('menolak treatment yang tidak terdaftar', () => {
    expect(bookingSchema.safeParse({ ...valid, service: 'sedot-lemak' }).success).toBe(false)
  })

  it('menolak tanggal yang sudah lewat', () => {
    expect(bookingSchema.safeParse({ ...valid, date: '2020-01-01' }).success).toBe(false)
  })
})
