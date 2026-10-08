import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { Note } from "@/components/ui/note"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Terms",
  description: `Draft terms for this ${brand.name} preview.`,
}

export default function TermsPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Terms"
        title="Draft terms for a preview"
        lede="These notes explain the boundary of this prototype. They are not a contract, and they are not legal advice."
      />
      <Container className="max-w-3xl space-y-5 text-[17px] leading-8">
        <Note>Draft — October 2026.</Note>
        <p>
          The wishes on the site are examples. They are not offers, and they are
          not requests from real people. Walking through the fulfil demo does not
          create an order, a debt, or a promise to send a gift.
        </p>
        <p>
          Do not submit real personal data, payment details, or someone else&apos;s
          private information. Do not use the forms to harass anyone.
        </p>
        <p>
          Links to retailers are examples. {brand.name} does not sell those products,
          set their prices, or handle their shipping.
        </p>
        <p>
          The name on the site is a working name for this interface. These draft
          terms do not claim a trademark or a registered company.
        </p>
      </Container>
    </div>
  )
}
