import type { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to the ${brand.name} preview. Messages are not delivered yet.`,
}

export default function ContactPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Contact"
        title="Say hello"
        lede="Use this form for a question about the idea. There is no inbox connected yet, so a valid message stays in your browser and is not delivered."
      />
      <Container className="max-w-xl">
        <div className="rounded-[2rem] border border-line bg-white p-5 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </div>
  )
}
