import { MapPin } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Note } from "@/components/ui/note"
import { DetailSkeleton } from "@/components/wishes/skeletons"
import { StatusBadge } from "@/components/wishes/status-badge"
import { WishCard } from "@/components/wishes/wish-card"
import { ReportWish } from "@/components/wishes/report-wish"
import { getRelatedWishes, getWish, priceLabel } from "@/lib/wishes"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const wish = getWish(id)
  if (!wish) return { title: "Wish not found" }
  return {
    title: wish.title,
    description: wish.description,
  }
}

export default function WishPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <WishDetail params={params} />
    </Suspense>
  )
}

async function WishDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const wish = getWish(id)
  if (!wish) notFound()
  const related = getRelatedWishes(wish)
  const open = wish.status === "open"

  return (
    <Container className="py-10 sm:py-14">
      <Link href="/wishes" className="text-sm font-semibold text-violet">
        Back to wishes
      </Link>
      <article className="mt-6 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-white">
          <Image
            src={wish.image}
            alt={wish.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
              {wish.category}
            </span>
            <StatusBadge status={wish.status} />
          </div>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
            {wish.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">{wish.description}</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Name</dt>
              <dd className="font-semibold">{wish.displayName}</dd>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <dt className="sr-only">Country</dt>
              <dd>{wish.country}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Estimated price</dt>
              <dd>{priceLabel(wish)}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Note>
              This is an illustrative wish, written to show the product. It is not
              a request from a real person.
            </Note>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {open ? (
              <Button href={`/wishes/${wish.id}/fulfil`}>Fulfil This Wish</Button>
            ) : (
              <Note tone="mint">
                This example wish is already marked fulfilled. The fulfil demo is
                closed so it does not look like a second gift is needed.
              </Note>
            )}
            <ReportWish title={wish.title} />
          </div>
        </div>
      </article>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">
          How fulfilment works
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Someone chooses it", "A wish moves forward only if a person decides to help. Nothing is guaranteed."],
            ["They buy it themselves", "The intended path is a purchase from a retailer, or a future coordination service. This site does not take payment."],
            ["Delivery stays private", "A home address, phone number, and email are never part of the public wish."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-line bg-white p-5">
              <h3 className="font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
            </article>
          ))}
        </div>
        {wish.itemUrl ? (
          <p className="mt-4 text-sm leading-6 text-muted">
            Example item link:{" "}
            <a
              href={wish.itemUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-violet"
            >
              {wish.itemLabel ?? "Retailer"} (opens in a new tab)
            </a>
            . It is not a reserved item or a verified listing.
          </p>
        ) : null}
      </section>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Other example wishes
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <WishCard key={item.id} wish={item} />
            ))}
          </div>
        </section>
      ) : null}
    </Container>
  )
}
