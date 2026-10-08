import { Check } from "lucide-react"
import type { WishStatus } from "@/lib/types"

export function StatusBadge({ status }: { status: WishStatus }) {
  if (status === "fulfilled") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1 text-xs font-semibold text-ink">
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        Fulfilled
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-violet shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
      Open
    </span>
  )
}
