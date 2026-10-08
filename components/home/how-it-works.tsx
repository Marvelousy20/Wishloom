import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/motion/reveal"
import {
  CompassIllustration,
  GiftIllustration,
  NoteIllustration,
} from "@/components/decor/shapes"

const steps = [
  {
    title: "Make a wish",
    body: "Share something you would genuinely love to receive. Keep it simple.",
    art: NoteIllustration,
    tone: "bg-violet/10",
  },
  {
    title: "Discover a wish",
    body: "Explore wishes from people around the world and find one you would love to fulfil.",
    art: CompassIllustration,
    tone: "bg-coral/15",
  },
  {
    title: "Make it happen",
    body: "Help someone receive their wish through a straightforward process.",
    art: GiftIllustration,
    tone: "bg-sunshine/50",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold text-violet">How it works</p>
          <h2 className="mt-2 max-w-xl font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
            Three gentle steps. No competition.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            A wish is fulfilled only when someone chooses to help. Nothing here
            is guaranteed, and this preview does not place orders or take payment.
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
          <svg
            className="pointer-events-none absolute top-16 right-[12%] left-[12%] hidden h-8 lg:block"
            viewBox="0 0 800 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 22C140 22 180 6 400 20s260 18 400-2"
              stroke="#EAE4F0"
              strokeWidth="2"
              strokeDasharray="7 9"
            />
          </svg>
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} className="h-full">
              <article className="relative h-full rounded-3xl border border-line bg-white p-6">
                <div className={`flex h-20 w-20 items-center justify-center rounded-3xl ${step.tone}`}>
                  <step.art className="h-16 w-16" />
                </div>
                <p className="mt-5 text-sm font-semibold text-muted">0{index + 1}</p>
                <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
