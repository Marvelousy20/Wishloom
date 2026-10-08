import type { ReactNode } from "react"
import { listWishIds } from "@/lib/wishes"

export function generateStaticParams() {
  return listWishIds().map((id) => ({ id }))
}

export default function WishIdLayout({ children }: { children: ReactNode }) {
  return children
}
