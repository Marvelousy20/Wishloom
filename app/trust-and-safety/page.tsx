import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { Note } from "@/components/ui/note"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Trust and safety",
  description: `How ${brand.name} intends to treat people, and what is not built yet.`,
}

export default function TrustPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Trust & Safety"
        title="Kindness needs clear edges"
        lede="These are the principles for taking part. Some of the protections below are intentions. They are not live systems yet."
      />
      <Container className="max-w-3xl space-y-8 text-[17px] leading-8">
        <Note>
          This prototype does not review wishes, verify identities, detect fraud,
          or protect payments. A report submitted here is not delivered to a
          moderation team.
        </Note>
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Respectful participation
          </h2>
          <p className="mt-3">
            Ask for a specific thing, not for cash. Skip the hardship contest.
            Leave out insults, sexual content, hate, and anything that pressures
            a stranger to prove they are deserving.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Wish review
          </h2>
          <p className="mt-3">
            A future version should read new wishes before they are public, and
            remove ones that ask for money, expose private details, or break the
            guidelines. That review does not happen in this preview. Example
            wishes are fixtures in the project, not user submissions.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Reporting
          </h2>
          <p className="mt-3">
            Every wish page has a report form so the path is visible. Choosing a
            reason and submitting it shows a confirmation that the report stayed
            in your browser. Nobody receives it.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Personal information
          </h2>
          <p className="mt-3">
            Public wishes should show a display name, a country if the person
            allows it, and the wish itself. They should never show a home address,
            phone number, email, school, or precise location.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Giver anonymity
          </h2>
          <p className="mt-3">
            The fulfil demo lets a giver choose to stay anonymous or show a
            display name. That choice is not saved, and there is no public thank-you
            wall attached to it.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Fulfilment
          </h2>
          <p className="mt-3">
            The preferred path is a direct purchase from a retailer, or a later
            coordination service that keeps addresses private. This site does not
            collect card numbers, does not hold money, and does not mark a real
            wish fulfilled. Shipping and delivery would belong to the person who
            places the order.
          </p>
        </section>
      </Container>
    </div>
  )
}
