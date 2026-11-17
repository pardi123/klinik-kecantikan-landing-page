import * as React from 'react'
import { cn } from '~/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'shadow-theme-xs focus-visible:border-brand-300 focus-visible:ring-brand-500/10 aria-invalid:border-error-500 aria-invalid:ring-error-500/10 dark:focus-visible:border-brand-800 flex field-sizing-content min-h-24 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 transition-colors outline-none placeholder:text-gray-400 focus-visible:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 aria-invalid:ring-3 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:disabled:bg-gray-800',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
