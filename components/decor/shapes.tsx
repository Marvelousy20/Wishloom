import { cn } from "@/lib/cn"

export function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0l1.7 8.3L22 12l-8.3 1.7L12 22l-1.7-8.3L2 12l8.3-1.7L12 0z"
      />
    </svg>
  )
}

export function GiftBox({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("h-20 w-20", className)}
      aria-hidden="true"
    >
      <rect x="12" y="34" width="56" height="34" rx="6" fill="#6C3BFF" />
      <rect x="8" y="26" width="64" height="14" rx="5" fill="#4B20C9" />
      <path d="M40 26v42" stroke="#FFD166" strokeWidth="6" />
      <path
        d="M40 28c-6-12-20-8-14 0"
        stroke="#FF6B6B"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 28c6-12 20-8 14 0"
        stroke="#FF6B6B"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function NoteIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <rect x="14" y="10" width="40" height="50" rx="8" fill="#FFFFFF" stroke="#EAE4F0" />
      <path d="M24 28h24M24 36h18M24 44h12" stroke="#716D80" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="18" r="8" fill="#FFD166" />
      <path d="M50 14.5l1 2.6 2.8.2-2.1 1.8.7 2.7L50 20.4l-2.4 1.4.7-2.7-2.1-1.8 2.8-.2 1-2.6z" fill="#17152B" />
    </svg>
  )
}

export function CompassIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <circle cx="36" cy="36" r="22" fill="#FFFFFF" stroke="#EAE4F0" strokeWidth="2" />
      <path d="M36 18v6M36 48v6M18 36h6M48 36h6" stroke="#716D80" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 24l6 16-6-3-6 3 6-16z" fill="#FF6B6B" />
      <circle cx="36" cy="36" r="3" fill="#6C3BFF" />
    </svg>
  )
}

export function GiftIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <rect x="16" y="32" width="40" height="26" rx="5" fill="#6C3BFF" />
      <rect x="14" y="26" width="44" height="10" rx="4" fill="#4B20C9" />
      <path d="M36 26v32" stroke="#FFD166" strokeWidth="4" />
      <path d="M36 26c-5-9-16-6-11 0" stroke="#8CE6C1" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M36 26c5-9 16-6 11 0" stroke="#FF6B6B" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}
