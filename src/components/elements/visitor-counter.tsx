'use client'

import { useEffect, useState } from 'react'

// Convert number to Roman numerals
function toRoman(num: number): string {
  const romanNumerals: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  let result = ''
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }
  return result
}

const COUNTER_URL = process.env.NEXT_PUBLIC_COUNTER_URL

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    if (!COUNTER_URL) return

    fetch(COUNTER_URL)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {
        // Silently fail - counter is non-essential
      })
  }, [])

  if (!count) return null

  return (
    <div className="mx-auto my-8 max-w-xs rounded border-2 border-dashed border-olive-300 bg-olive-50 px-4 py-3 text-center font-mono dark:border-olive-700 dark:bg-olive-950">
      <div className="text-xs uppercase tracking-wide text-olive-600 dark:text-olive-400">
        You are visitor
      </div>
      <div className="text-2xl font-bold text-olive-900 dark:text-olive-100">
        #{toRoman(count)}
      </div>
    </div>
  )
}
