import { Container } from "@/components/layout/container"
import { Spark } from "@/components/decor/shapes"
import { Button } from "@/components/ui/button"
import { discoverPath, makeWishPath } from "@/lib/navigation"

export function ClosingCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-20">
          <Spark className="absolute top-8 right-8 h-10 w-10 text-sunshine" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-coral" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
              What if your next good day started with someone else&apos;s?
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-8 text-[#ddd7ea]">
              Post a wish of your own, or look through the examples and imagine
              the one you would love to fulfil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={makeWishPath}>Make a Wish</Button>
              <Button href={discoverPath} variant="inverse">
                Discover Wishes
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
