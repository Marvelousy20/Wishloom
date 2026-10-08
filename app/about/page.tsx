import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "About",
  description: `What ${brand.name} is for, and what it is not.`,
}

export default function AboutPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="About"
        title="People post wishes. Other people make them come true."
        lede={`${brand.name} is a place for specific, joyful wishes — a camera, a set of books, a guitar — and for the strangers who decide to fulfil them.`}
      />
      <Container className="max-w-3xl space-y-5 text-[17px] leading-8">
        <p>
          It is not a crowdfunding site, a donation page, or a charity application.
          Nobody should have to compete over who has the saddest story, and nobody
          should have to beg.
        </p>
        <p>
          The wishes you can browse today are examples, written so the experience
          can be felt before any real requests exist. They are not from real people,
          and fulfilling the demo does not send a gift.
        </p>
        <h2 className="pt-4 font-display text-2xl font-extrabold tracking-tight">
          What a wish should feel like
        </h2>
        <p>
          Specific enough that someone can act on it. Warm enough that the person
          posting it keeps their dignity. Public enough to be found, and private
          enough that a home address never appears.
        </p>
        <p>
          Read the{" "}
          <Link href="/trust-and-safety" className="font-semibold text-violet">
            trust and safety
          </Link>{" "}
          notes for what this preview does, and what it deliberately does not claim
          to do yet.
        </p>
      </Container>
    </div>
  )
}
