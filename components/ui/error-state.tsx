"use client"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export function ErrorState({ reset }: { reset: () => void }) {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold text-violet">Something went wrong</p>
      <h1 className="mt-2 max-w-xl font-display text-4xl font-extrabold tracking-tight">
        This page could not be shown
      </h1>
      <p className="mt-4 max-w-lg text-lg leading-8 text-muted">
        Try again in a moment. This preview does not save wishes, so nothing of
        yours was lost.
      </p>
      <div className="mt-8">
        <Button onClick={reset}>Try again</Button>
      </div>
    </Container>
  )
}
