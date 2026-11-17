import { clinic } from '~/constants/clinic'

/** Tanggal hari ini (YYYY-MM-DD) menurut jam klinik, bukan UTC server. */
export function todayInClinic() {
  return new Date().toLocaleDateString('sv-SE', { timeZone: clinic.timeZone })
}
