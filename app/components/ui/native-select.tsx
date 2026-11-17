import * as React from 'react'
import { cn } from '~/lib/utils'

// A plain <select> styled like Input. Used in dashboard forms because it
// submits with the surrounding <Form> without any client-side state.
export function NativeSelect({ className, ...props }: React.ComponentProps<'select'>) {
  return (
    <select
      className={cn(
        'shadow-theme-xs focus-visible:border-brand-300 focus-visible:ring-brand-500/10 dark:focus-visible:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-800 outline-none focus-visible:ring-3 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90',
        className
      )}
      {...props}
    />
  )
}
