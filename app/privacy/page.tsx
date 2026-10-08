import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { Note } from "@/components/ui/note"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Privacy",
  description: `What this ${brand.name} preview collects, and what it does not.`,
}

export default function PrivacyPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Privacy"
        title="A draft for this preview"
        lede="This is not a finished privacy policy and it is not legal advice. It describes what this version of the site actually does."
      />
      <Container className="max-w-3xl space-y-5 text-[17px] leading-8">
        <Note>Draft — October 2026. No account system is connected.</Note>
        <p>
          Pages are served from the app itself. The example wishes are written
          into the project. Browsing them does not create a profile.
        </p>
        <p>
          The make-a-wish form, the fulfil demo, sign-in, contact, reports, and
          dashboard settings keep what you type in your browser for that visit.
          Photos you add for a wish preview are not uploaded. Passwords are
          cleared after the sign-in screen explains that no session was created,
          and they are not sent to a server.
        </p>
        <p>
          There is no payment form, so card numbers are never requested. Do not
          put a home address, phone number, or government ID into any field.
        </p>
        <p>
          If a real account, publishing, and payment flow are added later, this
          page should be replaced with a policy that names the providers, the
          data they receive, and how long it is kept.
        </p>
      </Container>
    </div>
  )
}
