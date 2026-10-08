import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

const tones = {
  sunshine: "border-[#f3d48a] bg-sunshine/45",
  mint: "border-[#b7ecd8] bg-mint/45",
  plain: "border-line bg-white",
} as const

export function Note({
  children,
  tone = "sunshine",
}: {
  children: ReactNode
  tone?: keyof typeof tones
}) {
  return (
    <p className={cn("rounded-2xl border px-4 py-3 text-sm leading-6 text-ink", tones[tone])}>
      {children}
    </p>
  )
}
