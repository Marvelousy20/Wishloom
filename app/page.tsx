import { Suspense } from "react"
import { ClosingCta } from "@/components/home/closing-cta"
import { GivingSection } from "@/components/home/giving-section"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { ImpactStrip } from "@/components/home/impact-strip"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/motion/reveal"
import { SkeletonGrid } from "@/components/wishes/skeletons"
import { WishExplorer } from "@/components/wishes/wish-explorer"
import { getFeaturedWishes, getWishes } from "@/lib/wishes"

export default function HomePage() {
  const wishes = getWishes()

  return (
    <>
      <Hero wishes={getFeaturedWishes()} />
      <ImpactStrip />
      <section id="discover" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold text-violet">Discover</p>
            <h2 className="mt-2 max-w-xl font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Your next little act of kindness
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Browse wishes from around the world. You never know whose day you
              might change.
            </p>
          </Reveal>
          <div className="mt-10">
            <Suspense fallback={<SkeletonGrid count={6} />}>
              <WishExplorer wishes={wishes} variant="home" />
            </Suspense>
          </div>
        </Container>
      </section>
      <HowItWorks />
      <GivingSection />
      <ClosingCta />
    </>
  )
}
