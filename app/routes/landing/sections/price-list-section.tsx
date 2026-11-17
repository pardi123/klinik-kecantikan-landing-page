import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Reveal } from '~/components/reveal'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { formatItemPrice, type PriceCategory, priceList } from '~/constants/price-list'
import { cn } from '~/lib/utils'

function PriceRows({ category }: { category: PriceCategory }) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {category.items.map((item) => (
        <li
          key={`${item.name}-${item.unit ?? ''}`}
          className="flex items-baseline justify-between gap-4 border-b border-dashed border-gray-200 py-3"
        >
          <span className="text-[15px] text-gray-800">{item.name}</span>
          <span className="text-brand-600 shrink-0 text-right text-[15px] font-semibold whitespace-nowrap">
            {formatItemPrice(item)}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function PriceListSection() {
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState(priceList[0].id)
  const [query, setQuery] = useState('')

  const activeCategory = useMemo(
    () => priceList.find((category) => category.id === activeId) ?? priceList[0],
    [activeId]
  )

  const searchResults = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    if (!keyword) return null
    return priceList.flatMap((category) => {
      const items = category.items.filter((item) => item.name.toLowerCase().includes(keyword))
      return items.length ? [{ ...category, items }] : []
    })
  }, [query])

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  const fade = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } }

  return (
    <section id="harga" className="bg-blush scroll-mt-24 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-xl flex-col gap-3">
            <p className="text-brand-500 text-[13px] font-semibold tracking-[3px] uppercase">
              Price List
            </p>
            <h2 className="font-heading text-5xl leading-tight font-medium">Harga treatment</h2>
            <p className="text-gray-600">
              Harga resmi Zeeta Beauty Care. Treatment yang paling pas akan dianjurkan dokter saat
              konsultasi.
            </p>
          </div>
          <label className="relative w-full max-w-xs">
            <span className="sr-only">Cari treatment</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-gray-500"
            />
            <Input
              type="search"
              value={query}
              onChange={handleQueryChange}
              placeholder="Cari treatment…"
              className="rounded-full bg-white pl-10"
            />
          </label>
        </Reveal>

        {!searchResults && (
          <div
            role="tablist"
            aria-label="Kategori treatment"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-wrap lg:px-0"
          >
            {priceList.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={category.id === activeId}
                onClick={() => setActiveId(category.id)}
                className={cn(
                  'min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium whitespace-nowrap transition-colors',
                  category.id === activeId
                    ? 'bg-brand-500 border-brand-500 text-white'
                    : 'hover:border-brand-300 border-gray-300 bg-white text-gray-700'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="shadow-theme-md min-h-[320px] rounded-3xl bg-white p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {searchResults ? (
              <motion.div key={`search-${query}`} {...fade} className="flex flex-col gap-8">
                {searchResults.length === 0 && (
                  <p className="text-gray-600">
                    Treatment “{query}” tidak ditemukan. Tanyakan langsung saat konsultasi, ya.
                  </p>
                )}
                {searchResults.map((category) => (
                  <div key={category.id} className="flex flex-col gap-2">
                    <h3 className="font-heading text-2xl font-semibold">{category.name}</h3>
                    <PriceRows category={category} />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory.id}
                {...fade}
                role="tabpanel"
                aria-label={activeCategory.name}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex max-w-2xl flex-col gap-2">
                    <h3 className="font-heading text-3xl font-semibold">{activeCategory.name}</h3>
                    <p className="text-gray-600">{activeCategory.intro}</p>
                  </div>
                  <Button asChild className="rounded-full px-5">
                    <a href={`?treatment=${activeCategory.id}#booking`}>
                      Booking {activeCategory.name}
                    </a>
                  </Button>
                </div>
                <PriceRows category={activeCategory} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
