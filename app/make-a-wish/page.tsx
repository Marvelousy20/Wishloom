import type { Metadata } from "next"
import { MakeWishForm } from "@/components/forms/make-wish-form"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"

export const metadata: Metadata = {
  title: "Make a wish",
  description: "Share something you would genuinely love to receive.",
}

export default function MakeAWishPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Make a wish"
        title="Share something you would love"
        lede="Keep it specific and kind. You do not need to prove that you deserve it, and you do not need to tell a sad story."
      />
      <Container className="max-w-3xl">
        <MakeWishForm />
      </Container>
    </div>
  )
}
