import { brand } from "@/lib/brand"
import { cn } from "@/lib/cn"

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="10" fill="#6C3BFF" />
      <path
        d="M16 7.5v17"
        stroke="#FFF9F0"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 15.5h17"
        stroke="#FFD166"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 11.2c1.4-2.6 6.6-2.6 8 0"
        stroke="#FF6B6B"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="font-display text-lg font-extrabold tracking-tight text-ink">
        {brand.name}
      </span>
    </span>
  )
}
