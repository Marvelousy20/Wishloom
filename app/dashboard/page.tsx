import type { Metadata } from "next"
import { SettingsPanel } from "@/components/dashboard/settings-panel"
import { Spark } from "@/components/decor/shapes"
import { Container } from "@/components/layout/container"
import { PageIntro } from "@/components/layout/page-intro"
import { Note } from "@/components/ui/note"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A preview of your wishes, gifts, and privacy settings.",
}

const panels = [
  {
    title: "My wishes",
    body: "When you can sign in and publish a wish, it will live here with a clear status.",
  },
  {
    title: "Fulfilled wishes",
    body: "Wishes that someone has actually fulfilled will move here. None are recorded yet.",
  },
  {
    title: "Wishes I have helped",
    body: "This list needs an account. There is no record of gifts, because giving is not connected yet.",
  },
]

export default function DashboardPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Your space"
        title="A quiet place for your wishes"
        lede="This is a preview of the dashboard. It is meant to feel human, not like an admin panel."
      />
      <Container className="space-y-8">
        <Note>
          You are not signed in. Signing in is not connected, so these lists stay
          empty on purpose.
        </Note>
        <div className="grid gap-4 md:grid-cols-3">
          {panels.map((panel) => (
            <article key={panel.title} className="rounded-3xl border border-line bg-white p-5">
              <Spark className="h-5 w-5 text-coral" />
              <h2 className="mt-4 font-display text-xl font-extrabold tracking-tight">
                {panel.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{panel.body}</p>
              <p className="mt-4 text-sm font-semibold text-ink">Nothing here yet</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/make-a-wish" variant="secondary">
            Preview making a wish
          </Button>
          <Button href="/wishes">Discover wishes</Button>
        </div>
        <SettingsPanel />
      </Container>
    </div>
  )
}
