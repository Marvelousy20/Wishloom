import { Suspense } from "react"
import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { SkeletonGrid } from "@/components/wishes/skeletons"
import { WishExplorer } from "@/components/wishes/wish-explorer"
import { getWishes } from "@/lib/wishes"

export const metadata: Metadata = {
  title: "Discover wishes",
  description: "Browse example wishes from around the world.",
}

export default function WishesPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Discover"
        title="Wishes from around the world"
        lede="Browse wishes from around the world. You never know whose day you might change."
      />
      <Container>
        <Suspense fallback={<SkeletonGrid />}>
          <WishExplorer wishes={getWishes()} variant="page" />
        </Suspense>
      </Container>
    </div>
  )
}
