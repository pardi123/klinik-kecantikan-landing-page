import * as React from 'react'
import { cn } from '~/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'shadow-theme-xs focus-visible:border-brand-300 focus-visible:ring-brand-500/10 aria-invalid:border-error-500 aria-invalid:ring-error-500/10 dark:focus-visible:border-brand-800 h-11 w-full min-w-0 rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 transition-colors outline-none file:mr-3 file:inline-flex file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-700 placeholder:text-gray-400 focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60 aria-invalid:ring-3 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:file:text-gray-400 dark:placeholder:text-white/30 dark:disabled:bg-gray-800',
        className
      )}
      {...props}
    />
  )
}

export { Input }
