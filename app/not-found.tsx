import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold text-violet">404</p>
      <h1 className="mt-2 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        That page is not here
      </h1>
      <p className="mt-4 max-w-lg text-lg leading-8 text-muted">
        The link may be mistyped, or the wish you wanted is not in this example
        set.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Go home</Button>
        <Button href="/wishes" variant="secondary">
          Discover wishes
        </Button>
      </div>
    </Container>
  )
}
