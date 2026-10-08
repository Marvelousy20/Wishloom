import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/wishes/status-badge"
import { categoryAccent, priceLabel } from "@/lib/wishes"
import type { Wish } from "@/lib/types"

export function WishCard({ wish }: { wish: Wish }) {
  const open = wish.status === "open"

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-white shadow-[0_16px_40px_-28px_rgba(23,21,43,0.55)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(108,59,255,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
        <Image
          src={wish.image}
          alt={wish.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 right-3">
          <StatusBadge status={wish.status} />
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink">
            {wish.category}
          </span>
        </div>
      </div>
      <div className={categoryAccent(wish.category) + " h-1"} />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-snug font-extrabold tracking-tight">
          <Link href={`/wishes/${wish.id}`} className="hover:text-violet">
            {wish.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{wish.description}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-ink">
          <MapPin className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          <span>
            <span className="font-semibold">{wish.displayName}</span>
            <span className="text-muted"> · {wish.country}</span>
          </span>
        </p>
        <p className="mt-1 text-sm font-semibold">{priceLabel(wish)}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button href={`/wishes/${wish.id}`} variant="secondary" size="md" className="flex-1">
            View Wish
          </Button>
          {open ? (
            <Button href={`/wishes/${wish.id}/fulfil`} size="md" className="flex-1">
              Fulfil
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
