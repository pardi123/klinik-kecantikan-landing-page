import type { ReactNode } from 'react'
import { Label } from '~/components/ui/label'

type FormFieldProps = {
  id: string
  label: string
  errors?: string[]
  children: ReactNode
}

/** Label + kontrol + pesan error pertama, dengan jarak yang seragam. */
export function FormField({ id, label, errors, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {errors?.[0] && <p className="text-error-600 text-sm">{errors[0]}</p>}
    </div>
  )
}
