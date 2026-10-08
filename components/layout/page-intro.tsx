import type { ReactNode } from "react"
import { Container } from "@/components/layout/container"

export function PageIntro({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string
  title: string
  lede: string
  children?: ReactNode
}) {
  return (
    <Container className="pt-12 pb-8 sm:pt-16">
      {eyebrow ? (
        <p className="text-sm font-semibold text-violet">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{lede}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </Container>
  )
}
