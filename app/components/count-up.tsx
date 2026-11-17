import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const formatter = new Intl.NumberFormat('id-ID')

type CountUpProps = {
  value: number
  suffix?: string
}

/** Angka yang menghitung naik saat pertama kali terlihat. */
export function CountUp({ value, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref}>
      <span className="sr-only">
        {formatter.format(value)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {formatter.format(display)}
        {suffix}
      </span>
    </span>
  )
}
