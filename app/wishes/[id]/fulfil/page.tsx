import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { FulfilFlow } from "@/components/forms/fulfil-flow"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Note } from "@/components/ui/note"
import { DetailSkeleton } from "@/components/wishes/skeletons"
import { getWish, priceLabel } from "@/lib/wishes"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const wish = getWish(id)
  return { title: wish ? `Fulfil: ${wish.title}` : "Fulfil a wish" }
}

export default function FulfilPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <FulfilContent params={params} />
    </Suspense>
  )
}

async function FulfilContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const wish = getWish(id)
  if (!wish) notFound()

  return (
    <Container className="py-12 sm:py-16">
      <Link href={`/wishes/${wish.id}`} className="text-sm font-semibold text-violet">
        Back to the wish
      </Link>
      <p className="mt-6 text-sm font-semibold text-violet">Fulfil a wish</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
        {wish.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{wish.description}</p>
      <dl className="mt-6 flex flex-wrap gap-6 text-sm">
        <div>
          <dt className="font-semibold">From</dt>
          <dd className="text-muted">
            {wish.displayName} · {wish.country}
          </dd>
        </div>
        <div>
          <dt className="font-semibold">Estimated cost</dt>
          <dd className="text-muted">{priceLabel(wish)}</dd>
        </div>
        <div>
          <dt className="font-semibold">Status</dt>
          <dd className="text-muted">{wish.status === "open" ? "Open" : "Fulfilled"}</dd>
        </div>
      </dl>

      <div className="mt-8 max-w-2xl space-y-4">
        <Note>
          This is a labelled demo. It explains how a giver could help. It does
          not collect payment, and finishing it does not mean a gift was bought.
        </Note>
        {wish.status === "fulfilled" ? (
          <div className="space-y-4">
            <Note tone="mint">
              This example wish is already fulfilled, so the demo stops here.
            </Note>
            <Button href="/wishes" variant="secondary">
              Find an open wish
            </Button>
          </div>
        ) : (
          <FulfilFlow wish={wish} />
        )}
      </div>
    </Container>
  )
}
